import Button from '../Button';
import AInput from './components/Input'
import { Controller, useForm } from "react-hook-form";


interface IFormInput {
    propject_name: string;
    project_tag: Array<string>;
    project_year: string;
    project_collection: Array<string>
}

const MController: any = Controller;

function Form(props: any) {
    const { formDefaultValue, onSubmit } = props;

    const {
        handleSubmit,
        control,
        formState: { errors, isDirty },
    } = useForm<IFormInput>({
        mode: "onChange",
        defaultValues: formDefaultValue,
    });

    const handleOnSubmitForm = (values: any) => {
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmitForm)}>
            <MController
                name="project_name"
                control={control}
                render={({ field }: any) => {
                    return (
                        <AInput
                            placeholder={"Nhập tên dự án"}
                            // className={errorsMgs?.final_url ? "has-error" : ""}
                            value={field.value || ""}
                            onChange={(e: any) => {
                                console.log(e)
                                field.onChange(e)
                            }}
                        />
                    );
                }}
            />


            <div className="md-mt-12 md-d-flex md-justify-end">
                <Button type="submit" content="Lưu" status="success" className="md-m-0 md-mr-8 " />
            </div>
        </form>
    )
}

export default Form