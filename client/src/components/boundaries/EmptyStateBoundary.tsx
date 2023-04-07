import StateErrorElement from "./StateErrorElement";
import StateLoadElement from "./StateLoadElement";

const EmptyStateBoundary = ({
  element,
  loading,
  error,
}: {
  element: React.ReactNode;
  loading?: "loading";
  error?: Error;
}) => {
  if (error) return <StateErrorElement />;
  if (loading) return <StateLoadElement />;
  if (!error || !loading) return <>{element}</>;
  return null;
};
export default EmptyStateBoundary;
