import { Checkbox } from "../ui/checkbox";

type CheckboxInputProps = {
    name: string;
    defaultChecked?: boolean;
    label: string;
};

function ImageInputContainer({
    name,
    label,
    defaultChecked,
}: CheckboxInputProps) {
    return (
        <div className='flex items-center space-x-2'>
            <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
            <label
                htmlFor={name}
                className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize'
            >
                {label || name}
            </label>
        </div>
    );
}
export default ImageInputContainer;
