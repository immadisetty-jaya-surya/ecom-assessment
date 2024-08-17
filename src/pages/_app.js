import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { CartProvider } from "@/utils/CartContext";
import { ClerkProvider } from "@clerk/nextjs";

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ClerkProvider>
  );
}
