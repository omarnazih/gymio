import { useParams } from "react-router-dom";

export default function ChildPage() {
  const { id } = useParams();

  return <div>{id}</div>;
}
