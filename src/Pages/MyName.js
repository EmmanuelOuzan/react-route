import { useParams } from "react-router-dom";
export default function MyName() {
    const params = useParams()
    return (
            <main>
                <h2>{params.name}</h2>
            </main>
    );
}