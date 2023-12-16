import "@styles/globals.css";
import Nav from "@components/nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "Promptbook",
  description:
    "Discover and share AI-generated prompts for your next writing project.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="favicon" href="/assets/images/logo.png" />
        <title>{metadata.title}</title>
        <link rel="apple-touch-icon" href="public/assets/images/logo.png" />
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
