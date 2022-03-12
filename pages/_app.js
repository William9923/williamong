import "@styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <head><script>0</script></head>
      <div className="flex justify-center items-centers w-full">
        <div className="w-5/6 md:w-3/4">
        <Component {...pageProps} />
      </div>
    </div>
    </ThemeProvider >
  );
}

export default MyApp;
