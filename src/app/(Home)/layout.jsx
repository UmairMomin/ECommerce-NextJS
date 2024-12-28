import { Button } from "@mui/material";

export default function Home({ children }) {
  return (
    <html lang="en">
      <body>
        <div>This is Nav</div>
        {children}
      </body>
    </html>
  );
}
