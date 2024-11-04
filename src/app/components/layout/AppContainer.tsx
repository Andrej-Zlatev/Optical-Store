import { ContainerProps } from "@/app/types/container";

const AppContainer: React.FC<ContainerProps> = ({ children }) => {
  return <div className={` container mx-auto px-4`}>{children}</div>;
};

export default AppContainer;
