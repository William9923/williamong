import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <div className="flex justify-center items-centers">
        <div className="w-3/4">
        <Component {...pageProps} />
      </div>
    </div>
    </ThemeProvider >
  );
}

export default MyApp;
