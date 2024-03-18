import { useState } from "react";
import { PRACTICES } from "../shared/practices";
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [practices, setPractices] = useState(PRACTICES);

    return <DirectoryScreen practices={practices} />;
}

export default Main;