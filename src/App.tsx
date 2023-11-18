import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/MyDocument";

function App() {
  return (
    <PDFViewer height={600} width={900}>
      <MyDocument />
    </PDFViewer>
  );
}

export default App;
