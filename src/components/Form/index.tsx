import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import moment from 'moment';

import { toast } from 'react-toastify';
import Button from '../Button';
import BadgesWClose from '../Chip';
import AInput from './components/Input'
import SampleImage from '../Sample/Image';
import Spinner from '../Spinner';
import DatePicker from "react-datepicker";
import ATextArea from './components/TextArea';

import { storage } from '../../constants/firebase';
import { EXPLORE_DEFAULT, PROJECT_DEFAULT } from '../../pages/Admin/Detail/context/store/constants';

import "react-datepicker/dist/react-datepicker.css";
import AspectRatioContainer from '../AspectRatio';

const MDatePicker: any = DatePicker;

interface IFormInput {
    propject_name: string;
    project_tag: Array<string>;
    project_year: string;
    project_collection: Array<string>
}

const MController: any = Controller;

const Form = forwardRef((props: any, ref) => {
    const { formDefaultValue, onSubmit, type } = props;

    const [inputTag, setInputTag] = useState("");
    const [urls, setUrls] = useState<any>([]);
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);

    const {
        handleSubmit,
        control,
        setValue,
        watch,
        reset,
    } = useForm<IFormInput>({
        mode: "onChange",
        defaultValues: formDefaultValue,
    });

    const Hreset: any = reset;
    const Hwatch: any = watch;
    const HsetValue: any = setValue;

    const watchExploreBanner: any = Hwatch("explore_banner")

    useImperativeHandle(ref, () => ({
        resetFormValues() {
            Hreset(PROJECT_DEFAULT);
            Hreset(EXPLORE_DEFAULT);
            setIsLoadingUpload(false)
        }
    }));

    useEffect(() => {
        // & Upload file cho Project
        if (urls.length && !isLoadingUpload && type === 'project') {
            const previousValue = Hwatch('project_collection')
            const final = [...previousValue, ...urls];

            HsetValue("project_collection", final)
        }

        // & Upload file cho Explore
        if (urls.length && !isLoadingUpload && type === 'explore') {
            const previousValue = Hwatch('explore_collection')
            const final = [...previousValue, ...urls];

            HsetValue("explore_collection", final)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urls, isLoadingUpload])

    const handleOnSubmitForm = (values: any) => {
        onSubmit && onSubmit(values)
    }

    const getImageDimensions = (image: any) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = function () {
                const w = img.width;
                const h = img.height;
                const separateLink = image.name.split(".")
                const newName = `${separateLink[0]}[${w}x${h}].${separateLink[1]}`;
                resolve({ w, h, newName });
            };
            img.src = URL.createObjectURL(image);
        });
    };

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
                const { newName }: any = await getImageDimensions(image);

                const uploadTask = storage.ref().child(`images/${type}/${newName}`).put(image);

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
            }
        }
    };

    const preventEnterKeySubmission = (e: React.KeyboardEvent<HTMLFormElement>) => {
        const target = e.target;
        if (e.key === "Enter" && target instanceof HTMLInputElement) {
            e.preventDefault();
        }
    };

    return (
        <form onSubmit={handleSubmit(handleOnSubmitForm)}
            onKeyDown={preventEnterKeySubmission}
        >
            {type === 'project' && <div className="md-row">
                <div className="md-col-6 md-pr-8">
                    <h3 className="md-fs-12 md-fw-500 md-m-0 md-mb-4">
                        Tên dự án
                    </h3>

                    <MController
                        name="project_name"
                        control={control}
                        render={({ field }: any) => {
                            return (
                                <AInput
                                    placeholder={"Nhập tên dự án"}
                                    value={field.value || ""}
                                    onChange={(e: any) => {
                                        field.onChange(e)
                                    }}
                                />
                            );
                        }}
                    />
                </div>

                <div className="md-col-6 md-pl-8">
                    <h3 className="md-fs-12 md-fw-500 md-m-0 md-mb-4">
                        Năm
                    </h3>

                    <MController
                        name="project_year"
                        control={control}
                        render={({ field }: any) => {

                            return (
                                <div style={{
                                    width: "100%",
                                    height: 40
                                }}>
                                    <MDatePicker
                                        showIcon
                                        onChange={(date: any) => {
                                            const currentDate = moment(date).unix() * 1000
                                            field.onChange(currentDate);
                                        }}
                                        dateFormat="dd/MM/yyyy"
                                        selected={field.value}
                                    />
                                </div>
                            );
                        }}
                    />
                </div>

                <div className="md-col-12 md-mt-12">
                    <h3 className="md-fs-12 md-fw-500 md-m-0 md-mb-4">
                        Tags
                    </h3>

                    <AInput
                        placeholder={"Nhập tag để thêm"}
                        value={inputTag}
                        onChange={(e: any) => {
                            setInputTag(e);
                        }}
                        onKeyEnter={(value: any) => {
                            const previousValue = watch("project_tag");
                            let final: any = [...previousValue, value];

                            setValue("project_tag", final);
                            setInputTag('');
                            return;
                        }}
                    />

                    <MController
                        name="project_tag"
                        control={control}
                        render={({ field }: any) => {
                            return (
                                <div className="md-mt-8 md-d-flex md-wrap">
                                    {field.value.map((value: any, id: any) => <BadgesWClose key={id} item={value} onRemove={(e: string) => {
                                        let final = field.value.filter((y: any) => y !== e)
                                        field.onChange(final)
                                    }} />)
                                    }
                                </div>
                            );
                        }}
                    />
                </div>

                <div className="md-col-12 md-mt-12 md-relative">
                    {isLoadingUpload && <div className="md-d-flex md-justify-center md-items-center md-absolute" style={{
                        width: "100%",
                        height: "100%",
                        top: "50%",
                        left: '50%',
                        transform: "translate(-50%, -50%)",
                        background: '#ffffff',
                        zIndex: 99999,
                        borderRadius: 8,
                        opacity: 0.6
                    }}>
                        <Spinner />
                    </div>}

                    <h3 className="md-fs-12 md-fw-500 md-m-0 md-mb-4">
                        Hình ảnh
                    </h3>

                    <div style={{
                        maxHeight: 300,
                        overflowY: 'auto'
                    }}
                        className="md-mt-8 md-row"
                    >
                        <MController
                            name="project_collection"
                            control={control}
                            render={({ field }: any) => {
                                return (
                                    <>
                                        {field.value.map((img: string, index: string) => {
                                            return <SampleImage src={img} key={index} className="md-col-3" onRemove={(value: any) => {
                                                let final = field.value.filter((y: any) => y !== value)
                                                field.onChange(final);
                                            }} />
                                        })}
                                    </>
                                );
                            }}
                        />

                        <div className="md-col-3 md-p-10">
                            <label className="md-d-flex md-flex-col md-items-center md-justify-center md-relative " style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: "8px",
                                border: "1px solid #adb5bd",
                                cursor: 'pointer',
                                aspectRatio: "1 / 1"
                            }} htmlFor="formId" onChange={(e) => {
                                handleChangeFile(e)
                            }}>
                                <input name="" type="file" id="formId" hidden style={{
                                    background: "red",
                                    // width: '100%',
                                    // height: '100%',
                                    position: 'absolute',
                                    borderRadius: "8px",
                                }}
                                    multiple
                                    accept="image/png, image/gif, image/jpeg"
                                />
                                {svgImageAdd}
                            </label>
                        </div>



                    </div>
                </div>
            </div>}

            {type === 'explore' && <div className="md-row" style={{
                maxHeight: 500,
                overflowY: "auto"
            }}>
                <div className="md-col-12">
                    <h3 className="md-fs-12 md-fw-500 md-m-0 md-mb-4">
                        Tên bài viết
                    </h3>

                    <MController
                        name="explore_name"
                        control={control}
                        render={({ field }: any) => {
                            return (
                                <AInput
                                    placeholder={"Nhập tên bài viết"}
                                    value={field.value || ""}
                                    onChange={(e: any) => {
                                        field.onChange(e)
                                    }}
                                />
                            );
                        }}
                    />
                </div>

                <div className="md-col-12 md-mt-12">
                    <h3 className="md-fs-12 md-fw-500 md-m-0 md-mb-4">
                        Tags
                    </h3>

                    <AInput
                        placeholder={"Nhập tag để thêm"}
                        value={inputTag}
                        onChange={(e: any) => {
                            setInputTag(e);
                        }}
                        onKeyEnter={(value: any) => {
                            const previousValue = Hwatch("explore_tag");
                            let final: any = [...previousValue, value];

                            HsetValue("explore_tag", final);
                            setInputTag('');
                            return;
                        }}
                    />

                    <MController
                        name="explore_tag"
                        control={control}
                        render={({ field }: any) => {
                            return (
                                <div className="md-mt-8 md-d-flex md-wrap">
                                    {field.value.map((value: any, id: any) => <BadgesWClose key={id} item={value} onRemove={(e: string) => {
                                        let final = field.value.filter((y: any) => y !== e)
                                        field.onChange(final)
                                    }} />)
                                    }
                                </div>
                            );
                        }}
                    />
                </div>

                <div className="md-col-12 md-mt-12">
                    <h3 className="md-fs-12 md-fw-500 md-m-0 md-mb-4">
                        Mô tả bài viết
                    </h3>
                    <MController
                        name="explore_description"
                        control={control}
                        render={({ field }: any) => {
                            return (
                                <ATextArea
                                    placeholder={"Nhập mô tả"}
                                    value={field.value || ""}
                                    onChange={(e: any) => {
                                        field.onChange(e)
                                    }}
                                />
                            );
                        }}
                    />
                </div>

                <div className="md-col-12 md-mt-12 md-relative">
                    {isLoadingUpload && <div className="md-d-flex md-justify-center md-items-center md-absolute" style={{
                        width: "100%",
                        height: "100%",
                        top: "50%",
                        left: '50%',
                        transform: "translate(-50%, -50%)",
                        background: '#ffffff',
                        zIndex: 99999,
                        borderRadius: 8,
                        opacity: 0.6
                    }}>
                        <Spinner />
                    </div>}

                    <h3 className="md-fs-12 md-fw-500 md-m-0 md-mb-4">
                        Hình ảnh
                    </h3>

                    <div style={{
                        maxHeight: 300,
                        overflowY: 'auto'
                    }}
                        className="md-mt-8 md-row"
                    >
                        <MController
                            name="explore_collection"
                            control={control}
                            render={({ field }: any) => {
                                return (
                                    <>
                                        {field.value.map((img: string, index: string) => {
                                            return <SampleImage
                                                showSelect
                                                src={img}
                                                key={index}
                                                className="md-col-3"
                                                onRemove={(value: any) => {
                                                    let final = field.value.filter((y: any) => y !== value)
                                                    field.onChange(final);
                                                }}
                                                isSelected={watchExploreBanner === img}
                                                onSelect={(value: any) => {
                                                    HsetValue("explore_banner", value)
                                                }}
                                            />
                                        })}
                                    </>
                                );
                            }}
                        />


                        <label className="md-col-3 md-d-flex md-flex-col md-items-center md-justify-center md-relative" style={{
                            aspectRatio: "1 / 1",
                            borderRadius: "8px",
                            border: "1px solid #adb5bd",
                            cursor: 'pointer'
                        }} htmlFor="formId" onChange={(e) => {
                            handleChangeFile(e)
                        }}>
                            <input name="" type="file" id="formId" hidden style={{
                                background: "red",
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                borderRadius: "8px",
                            }}
                                multiple
                                accept="image/png, image/gif, image/jpeg"
                            />
                            {svgImageAdd}
                        </label>
                    </div>
                </div>
            </div>
            }

            <div className="md-mt-20 md-d-flex md-justify-end">
                <Button type="submit" content="Lưu" status="success" />
            </div>
        </form>
    )
})

export default Form;

const svgImageAdd = <svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" viewBox="0 0 33 30" fill="none">
    <g clipPath="url(#clip0_8250_271131)">
        <path d="M12.5611 11.8881C13.7753 11.8881 14.7596 10.9039 14.7596 9.68968C14.7596 8.47548 13.7753 7.49121 12.5611 7.49121C11.3469 7.49121 10.3626 8.47548 10.3626 9.68968C10.3626 10.9039 11.3469 11.8881 12.5611 11.8881Z" fill="#D0D5DD" />
        <path d="M30.6069 17.781C29.5687 16.8039 28.2557 16.1626 26.8206 15.9794V4.80388C26.8206 3.61304 26.3321 2.54434 25.5687 1.75044C24.7748 0.956551 23.7061 0.498535 22.5153 0.498535H4.80535C3.61451 0.498535 2.5458 0.987084 1.75191 1.75044C0.958015 2.54434 0.5 3.61304 0.5 4.80388V18.8802V20.1932V23.0329C0.5 24.2237 0.988549 25.2924 1.75191 26.0863C2.5458 26.8802 3.61451 27.3382 4.80535 27.3382H21.9351C23.0649 28.2542 24.4695 28.8344 26.0267 28.8344C27.8283 28.8344 29.4465 28.1016 30.6069 26.9413C31.7672 25.781 32.5 24.1626 32.5 22.3611C32.5 20.5596 31.7672 18.9413 30.6069 17.781ZM2.11832 4.80388C2.11832 4.07106 2.42367 3.3993 2.91221 2.94128C3.40077 2.45273 4.07252 2.14739 4.80535 2.14739H22.5153C23.2481 2.14739 23.9199 2.45273 24.4084 2.94128C24.8969 3.42983 25.2023 4.10159 25.2023 4.83441V14.3611L20.6832 9.84204C20.3779 9.5367 19.8588 9.50617 19.5229 9.84204L12.7137 16.6818L8.10307 12.0405C7.79773 11.7352 7.2786 11.7046 6.94275 12.0405L2.11832 16.926V4.80388ZM4.77481 25.781V25.7199C4.04199 25.7199 3.37023 25.4146 2.88168 24.926C2.42367 24.4374 2.11832 23.7657 2.11832 23.0329V20.1932V19.2466L7.52293 13.8115L12.1336 18.4222C12.4389 18.7276 12.958 18.7276 13.2939 18.4222L20.1031 11.5825L24.5611 16.071C24.4695 16.1016 24.3779 16.1321 24.2863 16.1626C24.1641 16.1932 24.042 16.2237 23.8893 16.2848C23.7672 16.3153 23.6451 16.3764 23.5229 16.4069C23.4313 16.4374 23.3702 16.468 23.2786 16.529C23.1565 16.5902 23.0649 16.6207 22.9733 16.6818C22.8206 16.7734 22.6679 16.865 22.5153 16.9566C22.4237 17.0176 22.3626 17.0482 22.271 17.1092C22.2099 17.1398 22.1794 17.1703 22.1183 17.2008C21.8435 17.384 21.5993 17.5978 21.3855 17.842C20.2252 19.0024 19.4924 20.6207 19.4924 22.4222C19.4924 22.8802 19.5535 23.3077 19.6451 23.7657C19.6756 23.8878 19.7061 23.9794 19.7367 24.1016C19.8283 24.4069 19.9199 24.7123 20.042 25.0176V25.0482C20.1641 25.2924 20.2863 25.5672 20.4389 25.781H4.77481ZM29.416 25.781C28.5305 26.6665 27.3397 27.1856 25.9962 27.1856C24.7137 27.1856 23.5229 26.6665 22.6679 25.842C22.5458 25.7199 22.4237 25.5672 22.3015 25.4451C22.2099 25.3535 22.1183 25.2314 22.0267 25.1398C21.9046 24.9871 21.813 24.8039 21.7214 24.6207C21.6603 24.4985 21.5993 24.4069 21.5382 24.2848C21.4771 24.1321 21.416 23.9489 21.3855 23.7657C21.3549 23.6436 21.2939 23.4909 21.2633 23.3688C21.2023 23.0634 21.1717 22.7276 21.1717 22.3916C21.1717 21.0482 21.7214 19.8573 22.5763 18.9718C23.4313 18.0863 24.6527 17.5672 25.9962 17.5672C27.3397 17.5672 28.5305 18.1168 29.416 18.9718C30.3015 19.8573 30.8206 21.0482 30.8206 22.3916C30.8206 23.7046 30.271 24.8955 29.416 25.781Z" fill="#D0D5DD" />
        <path d="M26.5764 19.0939C26.5153 19.0328 26.4237 18.9717 26.3016 18.9107C26.21 18.8801 26.1184 18.8496 26.0268 18.8496C25.9963 18.8496 25.9963 18.8496 25.9963 18.8496C25.9657 18.8496 25.9657 18.8496 25.9657 18.8496C25.8741 18.8496 25.7825 18.8801 25.6909 18.9107C25.5993 18.9412 25.5077 19.0023 25.4161 19.0939L23.5229 20.987C23.2176 21.2923 23.2176 21.8114 23.5229 22.1473C23.8283 22.4526 24.3474 22.4526 24.6833 22.1473L25.1718 21.6587V25.0175C25.1718 25.4755 25.5382 25.8419 25.9963 25.8419C26.4543 25.8419 26.8207 25.4755 26.8207 25.0175V21.6587L27.3092 22.1473C27.6145 22.4526 28.1337 22.4526 28.4695 22.1473C28.7749 21.8419 28.7749 21.3229 28.4695 20.987L26.5764 19.0939Z" fill="#D0D5DD" />
    </g>
    <defs>
        <clipPath id="clip0_8250_271131">
            <rect width="32" height="29.3333" fill="white" transform="translate(0.5)" />
        </clipPath>
    </defs>
</svg>