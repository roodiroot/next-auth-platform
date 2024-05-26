import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}
const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="p-3 bg-red-500/15 rounded-md flex items-center gap-x-2 text-sm text-red-500 overflow-hidden">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
