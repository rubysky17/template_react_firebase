import { useEffect, useState } from 'react';

import { getList, storage, updateById } from '../../../../../constants/firebase';

import { ToastContainer, toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import AspectRatioContainer from '../../../../../components/AspectRatio';

function DesignerWrapper() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any>([]);
    const [urls, setUrls] = useState<any>([]);
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);
    const [menuNameUpload, setMenuNameUpload] = useState('')

    useEffect(() => {
        setIsLoading(true);

        getList("designs").then((res) => {
            setData(res);
            setIsLoading(false);
        })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    // Xử lý upload ảnh
    useEffect(() => {
        // & Upload file cho Project
        if (urls.length && !isLoadingUpload && menuNameUpload !== "") {
            const findItemIndexToUpdate: any = data.findIndex((it: any) => it.name === menuNameUpload);

            if (findItemIndexToUpdate !== -1) {
                updateById("designs", data[findItemIndexToUpdate].id, {
                    ...data[findItemIndexToUpdate],
                    image: urls[0]
                })
                    .then((response) => {
                        toast.success("Lưu hình ảnh thành công", {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: true,
                            theme: 'dark'
                        });

                        let updateData = [...data];

                        updateData[findItemIndexToUpdate] = {
                            ...updateData[findItemIndexToUpdate],
                            image: urls[0]
                        };

                        setData(updateData)

                        setIsLoading(false);
                    })
                    .catch((error) => {
                        toast.error("Lưu lại thất bại", {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: true,
                            theme: 'dark'
                        })
                    });
            }

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urls, isLoadingUpload])

    const handleChangeFile = async (e: any) => {
        setUrls([]);
        const { files } = e.target;
        const extension = /\.(gif|jpe?g|png|jpg)$/i;
        let canUploadFile = false;
        const uploadList = [];

        for (let i = 0; i < files.length; i++) {
            const image = files[i];

            if (extension.test(image.name)) {
                canUploadFile = true;
                uploadList.push(image);
            }
        }

        if (canUploadFile) {
            setIsLoadingUpload(true);

            const promises = uploadList.map(async (image) => {
                const uploadTask = storage.ref().child(`images/designs/${image.name}`).put(image);

                return new Promise((resolve: any, reject: any) => {
                    uploadTask.on(
                        "state_changed",
                        (snapshot) => { },
                        (error) => {
                            console.log({ error });
                            reject(error);
                        },
                        async () => {
                            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                            setUrls((prevState: any) => [...prevState, downloadURL]);
                            resolve();
                        }
                    );
                });
            });

            try {
                await Promise.all(promises).then(() => {
                    setIsLoadingUpload(false);

                    toast.success("Upload hình ảnh thành công", {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        theme: 'dark'
                    })
                });

            } catch (error: any) {
                console.log(error.code);

                setMenuNameUpload("")
            }
        }
    };

    return (
        <div className="md-p-20">
            <div className="md-whitebox">
                <div className="md-d-flex md-justify-between md-items-center md-mb-20">
                    <h2 className="md-mb-0 md-text-color-bg-admin-primary md-uppercase">Quản lý giao diện</h2>
                </div>


                {isLoading ? <Skeleton baseColor="#e4e6eb" height={30} /> : <div style={{
                    overflow: "hidden"
                }}
                    className={"md-row md-p-20"}
                >
                    {data?.map((item: any, idx: any) => {
                        return <div className="md-col-4 md-relative md-p-10 md-flex md-justify-center md-items-center" key={idx} >
                            <AspectRatioContainer aspectRatio={1 / 1} >
                                <img alt="img_menu" src={item.image} className="md-object-fit-cover md-custom-menu md-cursor-pointer" />

                                {item.type === 'image' ? <h2 className="md-font-secondary md-fs-10 md-md-fs-14 md-lg-fs-16 md-cursor-pointer md-text-color-white md-absolute md-mb-0" style={{
                                    top: "50%",
                                    left: '50%',
                                    transform: `translate(-50%, -50%)`,
                                }}>{item.name}</h2> : <h2 className="md-font-secondary md-fs-10 md-md-fs-14 md-lg-fs-16 md-text-center md-cursor-pointer md-text-color-white md-absolute md-mb-0" style={{
                                    top: "50%",
                                    left: '50%',
                                    transform: `translate(-50%, -50%)`,
                                    zIndex: 3
                                }} dangerouslySetInnerHTML={{ __html: item.detail }} />}
                            </AspectRatioContainer>

                            <h2 className="md-text-center md-uppercase">{item.name}</h2>

                            <div className="md-d-flex md-items-center md-justify-center">
                                <label className="md-d-flex md-flex-col md-items-center md-justify-center md-relative" htmlFor="formId"
                                    onChange={(e) => {
                                        handleChangeFile(e)
                                    }}
                                >
                                    <input name="" type="file" id="formId" hidden
                                        multiple
                                        accept="image/png, image/gif, image/jpeg"
                                        style={{
                                            width: "fit-content",
                                            background: "red"
                                        }}

                                    />

                                    <p className="md-cursor-pointer md-m-0 md-fw-500 md-fs-16" style={{
                                        color: "#fec843",
                                    }} onClick={() => {
                                        setMenuNameUpload(item.name)
                                    }}>Tải hình ảnh mới</p>
                                </label>
                            </div>

                        </div>
                    })}
                </div>}
            </div>

            <ToastContainer />
        </div>
    )
}

export default DesignerWrapper;