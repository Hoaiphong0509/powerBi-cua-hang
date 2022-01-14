import { PowerBIEmbed } from "powerbi-client-react";

export default function PowerBiContainer({ embeddedToken }) {
    const [report, setReport] = useState(null);
    useEffect(() => {
    if (report == null) return;
    report.refresh();
    }, [report, embeddedToken]);

    return (
        <PowerBIEmbed
        embedConfig={{ ...embedConfig, accessToken: embeddedToken }}
        />
    );
}