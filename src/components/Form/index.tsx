import { useState } from 'react';
import Button from '../Button';
import BadgesWClose from '../Chip';
import AInput from './components/Input'
import { Controller, useForm } from "react-hook-form";
import SampleImage from '../Sample/Image';


interface IFormInput {
    propject_name: string;
    project_tag: Array<string>;
    project_year: string;
    project_collection: Array<string>
}

const MController: any = Controller;

function Form(props: any) {
    const { formDefaultValue, onSubmit } = props;
    const [inputTag, setInputTag] = useState("")


    const {
        handleSubmit,
        control,
        setValue,
        watch,
        formState: { errors, isDirty },
    } = useForm<IFormInput>({
        mode: "onChange",
        defaultValues: formDefaultValue,
    });

    const handleOnSubmitForm = (values: any) => {
        onSubmit && onSubmit(values)
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmitForm)}>
            <div className="md-row">
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
                                <AInput
                                    placeholder={"Nhập năm dự án"}
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
                                    {field.value.map((value: any) => <BadgesWClose item={value} onRemove={(e: string) => {
                                        let final = field.value.filter((y: any) => y !== e)
                                        field.onChange(final)
                                    }} />)}
                                </div>
                            );
                        }}
                    />
                </div>

                <div className="md-col-12 md-mt-12">
                    <h3 className="md-fs-12 md-fw-500 md-m-0 md-mb-4">
                        Hình ảnh
                    </h3>

                    <div style={{
                        maxHeight: 300,
                        overflowY: 'auto'
                    }}>
                        <MController
                            name="project_collection"
                            control={control}
                            render={({ field }: any) => {
                                return (
                                    <div className="md-mt-8 md-row">
                                        {field.value.map((img: string, index: string) => {
                                            return <SampleImage src={img} key={index} className="md-col-4" onRemove={(value: any) => {
                                                let final = field.value.filter((y: any) => y !== value)
                                                field.onChange(final);
                                            }} />
                                        })}
                                    </div>
                                );
                            }}
                        />
                    </div>
                </div>
            </div>



            <div className="md-mt-20 md-d-flex md-justify-end">
                <Button type="submit" content="Lưu" status="success" />
            </div>
        </form>
    )
}

export default Form