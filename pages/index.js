import Head from "next/head";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import Footer from "@components/Footer";
import SubscribtionForm from "@components/SubscribtionForm";

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Mattel, Inc. | Mattel, Inc.</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Image src="/logo.png" roundedCircle />
        </Container>
      </Navbar>

      <SubscribtionForm />
      <Footer />
    </div>
  );
}
