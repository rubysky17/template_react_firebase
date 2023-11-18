import { ReactNode, useEffect, useState } from 'react'
import { getList } from '../../../../../constants/firebase';

import { SkeletonTable } from '../../../../../components/SkeletonLoading';
import Tippy from '@tippyjs/react';
import Modal from '../../../../../components/Modal';
import Button from '../../../../../components/Button';

import { useStore } from '../../context/store';
import Form from '../../../../../components/Form';

function ProjectWrapper() {
    const { state, dispatch, actions } = useStore();
    const { isOpenEditModal, formProjectDefaultValue } = state;

    const [isLoading, setIsLoading] = useState(true);
    const [dataTable, setDataTable] = useState([]);

    const headers = [
        {
            name: 'Tên dự án',
            render: (value: any, _: any): ReactNode => {
                return <>{value.project_name || "--"}</>
            },
            width: "15%"
        },
        {
            name: 'Tags',
            render: (value: any, id: any): ReactNode => {
                return <div className='md-d-flex'>
                    {value?.project_tag.length ? <>
                        {value?.project_tag?.map((tag: any, idx: any) => {
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
            name: 'Năm',
            render: (value: any, id: any): ReactNode => {
                return <>{value.project_year || "--"}</>
            },
            width: "8%"
        },
        {
            name: 'Hình ảnh',
            render: (value: any, id: any): ReactNode => {
                return <div className='md-d-flex'>
                    {value.project_collection.length ? <>
                        {value.project_collection?.slice(0, 3).map((imgSrc: any, idx: any) => {
                            return <div style={{
                                aspectRatio: '1 / 1',
                            }} className="md-pr-10 md-project-detail-picture" key={idx} >
                                <img src={imgSrc} style={{
                                    width: '100%',
                                    height: '100%',
                                }} alt="img_detai_project" className="md-cursor-pointer " />
                            </div>
                        })}
                    </> : "--"
                    }
                </div>
            },
            width: "42%"
        },
        {
            name: "Thao tác",
            render: (): ReactNode => {
                return <div>
                    <Tippy content="Chỉnh sửa">
                        <span className="md-px-10 md-cursor-pointer" onClick={() => {
                            dispatch(actions.setToggleModalEdit(true))
                        }}>{svgEdit}</span>
                    </Tippy>

                    <Tippy content="Xoá" >
                        <span className="md-px-10 md-cursor-pointer" onClick={() => {
                            dispatch(actions.setToggleModalEdit(true))
                        }}>{svgDelete}</span>
                    </Tippy>
                </div>
            },
            width: "10%"
        }
    ];

    useEffect(() => {
        setIsLoading(true);

        getList("projects").then((res) => {
            setDataTable(res);
            setIsLoading(false);
        })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);


    const onSubmit = (values: any) => {
        console.log("values", values)
    }

    const renderHeaderModalEdit = () => {
        return "Chỉnh sửa"
    }

    const renderBodyModalEdit = () => {
        return <Form formDefaultValue={formProjectDefaultValue} onSubmit={onSubmit} />
    }

    return (
        <div className="md-p-20">
            <div className="md-whitebox">
                <h2 className="md-text-color-bg-admin-primary md-uppercase">Quản lý dự án</h2>

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

            <Modal
                renderHeader={renderHeaderModalEdit}
                renderBody={renderBodyModalEdit}
                onClose={() => {
                    dispatch(actions.setToggleModalEdit(false))
                }}
                visible={isOpenEditModal}
                closable={false}
                className="hrv-report-custom-modal_config"
            />
        </div>
    )
}

export default ProjectWrapper;

const svgEdit = <svg width="12" height="12"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="M432,0c44.182,0,80,35.817,80,80c0,18.01-5.955,34.629-16,48l-32,32L352,48l32-32C397.371,5.955,413.988,0,432,0z M32,368   L0,512l144-32l296-296L328,72L32,368z M357.789,181.789l-224,224l-27.578-27.578l224-224L357.789,181.789z"></path></g></svg></svg>

const svgDelete = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g id="Icon"><path id="Vector" d="M15.8327 5.34175L14.6577 4.16675L9.99935 8.82508L5.34102 4.16675L4.16602 5.34175L8.82435 10.0001L4.16602 14.6584L5.34102 15.8334L9.99935 11.1751L14.6577 15.8334L15.8327 14.6584L11.1743 10.0001L15.8327 5.34175Z" fill="#e74c3c"></path></g></svg>