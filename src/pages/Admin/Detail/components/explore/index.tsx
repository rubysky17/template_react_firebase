import { ReactNode, useEffect, useRef, useState } from 'react';
import { useStore } from '../../context/store';

import { create, getDocById, getList, removeById, updateById } from '../../../../../constants/firebase';

import { SkeletonTable } from '../../../../../components/SkeletonLoading';
import Tippy from '@tippyjs/react';
import Modal from '../../../../../components/Modal';
import Form from '../../../../../components/Form';
import Spinner from '../../../../../components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import Button from '../../../../../components/Button';
import AspectRatioContainer from '../../../../../components/AspectRatio';

function ExploreWrapper() {
    const { state, dispatch, actions } = useStore();
    const { isOpenEditModal, isOpenCreateModal, formExploreDefaultValue, isLoadingEdit } = state;

    const [isLoading, setIsLoading] = useState(true);
    const [dataTable, setDataTable] = useState([]);

    const childRef: any = useRef();

    const headers = [
        {
            name: 'Tên bài viết',
            render: (value: any, _: any): ReactNode => {
                return <>{value.explore_name || "--"}</>
            },
            width: "15%"
        },
        {
            name: 'Tags',
            render: (value: any, id: any): ReactNode => {
                return <div className='md-d-flex' style={{
                    overflowX: "hidden",
                    flexWrap: "wrap"
                }}>
                    {value?.explore_tag.length ? <>
                        {value?.explore_tag?.map((tag: any, idx: any) => {
                            return <>
                                <p className="md-fs-12 md-md-fs-14 md-mb-0 md-mr-4 md-font-primary md-fw-300" key={idx}>#{tag}</p>
                            </>
                        })}
                    </> : "--"
                    }
                </div>
            },
            width: "20%"
        },
        {
            name: 'Mô tả bài viết',
            render: (value: any, id: any): ReactNode => {
                return <div dangerouslySetInnerHTML={{
                    __html: value?.explore_description
                }} style={{
                    maxHeight: 150,
                    overflowY: "auto"
                }}></div>
            },
            width: "25%"
        },
        {
            name: 'Hình ảnh',
            render: (value: any, id: any): ReactNode => {
                return <div className='md-d-flex'>
                    {value.explore_collection.length ? <>
                        {value?.explore_collection?.slice(0, 3).map((imgSrc: any, idx: any) => {
                            return <div className="md-col-4">
                                <AspectRatioContainer aspectRatio={1 / 1}>
                                    <div style={{
                                        width: `100%`,
                                        height: `100%`
                                    }} className="md-pr-10 md-project-detail-picture" key={idx} >
                                        <img src={imgSrc} style={{
                                            width: `100%`,
                                            height: `100%`,
                                        }} alt="img_detai_project" className="md-cursor-pointer " />
                                    </div>
                                </AspectRatioContainer>
                            </div>
                        })}
                    </> : "--"
                    }
                </div>
            },
            width: "30%"
        },
        {
            name: "Thao tác",
            render: (value: any): ReactNode => {
                return <div>
                    <Tippy content="Chỉnh sửa">
                        <span className="md-px-10 md-cursor-pointer" onClick={() => {
                            dispatch(actions.fetchEditData());
                            dispatch(actions.setToggleModalEdit(true));

                            getDocById("explores", value.id).then((res) => {
                                dispatch(actions.fetchEditDataExploreSuccess(res));
                            })
                                .catch((err) => console.log(err))

                        }}>{svgEdit}</span>
                    </Tippy>

                    <Tippy content="Xoá" >
                        <span className="md-px-10 md-cursor-pointer" onClick={() => {
                            onDelete(value.id)
                        }}>{svgDelete}</span>
                    </Tippy>
                </div>
            },
            width: "10%"
        }
    ];

    useEffect(() => {
        setIsLoading(true);

        getList("explores").then((res) => {
            setDataTable(res);
            setIsLoading(false);
        })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);


    const onSubmit = (values: any) => {
        // ! Validate
        if (!values.explore_name.trim().length) {
            return toast.error("Vui lòng điền tên bài viết", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                theme: 'dark'
            })
        }

        if (!values.explore_tag.length) {
            return toast.error("Vui lòng điền tag", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                theme: 'dark'
            })
        }

        if (!values.explore_collection.length) {
            return toast.error("Vui lòng upload hình ảnh", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                theme: 'dark'
            })
        }

        if (!values.explore_banner.length) {
            return toast.error("Vui lòng chọn hình ảnh làm banner", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                theme: 'dark'
            })
        }

        if (values.id) {
            updateById("explores", values.id, values)
                .then((response) => {
                    toast.success("Lưu bài viết thành công", {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        theme: 'dark'
                    });

                    dispatch(actions.setToggleModalEdit(false));
                    setIsLoading(true);

                    getList("explores").then((res) => {
                        setDataTable(res);
                        setIsLoading(false);
                    })
                        .catch((err) => console.log(err))
                        .finally(() => {
                            setIsLoading(false);
                        });
                })
                .catch((error) => {
                    toast.error("Lưu bài viết thất bại", {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        theme: 'dark'
                    })
                });
        } else {
            create("explores", values)
                .then((response) => {
                    toast.success("Tạo bài viết thành công", {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        theme: 'dark'
                    });

                    dispatch(actions.setToggleModalCreate(false));
                    setIsLoading(true);

                    setTimeout(() => {
                        getList("explores").then((res) => {
                            setDataTable(res);
                            setIsLoading(false);
                        })
                            .catch((err) => console.log(err))
                            .finally(() => {
                                setIsLoading(false);
                            });
                    }, 1000)
                })
                .catch((error) => {
                    toast.error("Tạo bài viết thất bại", {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        theme: 'dark'
                    })
                });
        }

        childRef.current.resetFormValues();
    }

    const onDelete = (id: any) => {
        setIsLoading(true);

        removeById("explores", id)
            .then((res) => {
                toast.success("Xoá thành công", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    theme: 'dark'
                });

                setTimeout(() => {
                    getList("explores").then((res) => {
                        setDataTable(res);
                        setIsLoading(false);
                    })
                        .catch((err) => console.log(err))
                        .finally(() => {
                            setIsLoading(false);
                        });
                }, 1000);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const renderHeaderModalEdit = () => {
        return "Chỉnh sửa"
    }

    const renderBodyModalEdit = () => {
        return <>
            {isLoadingEdit ? <div className="md-d-flex md-justify-center md-items-center" style={{
                minHeight: "300px"
            }}>
                <Spinner />
            </div> : <>
                {formExploreDefaultValue.id && <Form formDefaultValue={formExploreDefaultValue} onSubmit={onSubmit} ref={childRef} type="explore" />}
            </>}

        </>
    }

    const renderHeaderModalCreate = () => {
        return "Tạo mới"
    }

    const renderBodyModalCreate = () => {
        return <>
            <Form formDefaultValue={formExploreDefaultValue} onSubmit={onSubmit} ref={childRef} type="explore" />
        </>
    }

    return (
        <div className="md-p-20">
            <div className="md-whitebox">
                <div className="md-d-flex md-justify-between md-items-center md-mb-20">
                    <h2 className="md-mb-0 md-text-color-bg-admin-primary md-uppercase">Quản lý bài viết</h2>

                    <Button content="Thêm" onClick={() => {
                        dispatch(actions.setToggleModalCreate(true));
                    }} status="success" />
                </div>


                {isLoading ? <SkeletonTable rows={16} cols={headers.length} /> : <table className="md-table-list">
                    <thead >
                        <tr>
                            {headers.map((header, idx) => {
                                return <th key={idx} style={{
                                    width: header.width
                                }}>{header.name}</th>
                            })}
                        </tr>
                    </thead>

                    <tbody>
                        {dataTable.map((data, idx) => {
                            return <tr key={idx}>
                                {headers.map((header, index) => {
                                    return <td>
                                        {header.render(data, index)}
                                    </td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>}
            </div>

            {isOpenEditModal && <Modal
                renderHeader={renderHeaderModalEdit}
                renderBody={renderBodyModalEdit}
                onClose={() => {
                    dispatch(actions.setToggleModalEdit(false));
                    dispatch(actions.fetchEditDataExploreError());
                }}
                visible={isOpenEditModal}
                closable={false}
                className="hrv-report-custom-modal_config"
            />}


            {isOpenCreateModal && <Modal
                renderHeader={renderHeaderModalCreate}
                renderBody={renderBodyModalCreate}
                onClose={() => {
                    childRef.current.resetFormValues();
                    dispatch(actions.setToggleModalCreate(false));
                }}
                visible={isOpenCreateModal}
                closable={false}
                className="hrv-report-custom-modal_config"
            />}



            <ToastContainer />
        </div>
    )
}

export default ExploreWrapper;

const svgEdit = <svg width="12" height="12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="M432,0c44.182,0,80,35.817,80,80c0,18.01-5.955,34.629-16,48l-32,32L352,48l32-32C397.371,5.955,413.988,0,432,0z M32,368   L0,512l144-32l296-296L328,72L32,368z M357.789,181.789l-224,224l-27.578-27.578l224-224L357.789,181.789z"></path></g></svg></svg>

const svgDelete = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g id="Icon"><path id="Vector" d="M15.8327 5.34175L14.6577 4.16675L9.99935 8.82508L5.34102 4.16675L4.16602 5.34175L8.82435 10.0001L4.16602 14.6584L5.34102 15.8334L9.99935 11.1751L14.6577 15.8334L15.8327 14.6584L11.1743 10.0001L15.8327 5.34175Z" fill="#e74c3c"></path></g></svg>