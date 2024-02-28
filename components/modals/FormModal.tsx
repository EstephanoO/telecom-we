
interface FormModalProps {
    username: string;
    name: string;
    email: string;
    roles: string[];
}
// Asegúrate de que el componente FormModal acepte las props del tipo FormModalProps
export const FormModal: React.FC<FormModalProps> = ({
    username,
    name,
    email,
    roles
  }) => {
    return (
      <div>
        <h1>{username}</h1>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{JSON.stringify(roles)}</h1>
      </div>
    );
  };