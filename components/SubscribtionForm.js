import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Subscribtion from "./Subscription";

const SUBSCRIBTIONS = [
  {
    id: 10,
    value: false,
    title: "Barbie",
    description:
      "Toys for storytelling play, special events, latest news, and inspiring ways to be anything with Barbie.",
  },
  {
    id: 11,
    value: false,
    title: "Barbie Signature",
    description:
      "Stylish dolls & keepsakes, collector info, special events, and hottest news about the fashion icon.",
  },
  {
    id: 12,
    value: false,
    title: "Fisher-Price",
    description:
      "Get the latest info on our newest baby gear and toys for all children, 0-5 years old.",
  },
  {
    id: 13,
    value: false,
    title: "Hot Wheels",
    description:
      "Epic new cars & sets, action-packed events, and info celebrating 50+ years of revving imagination.",
  },
  {
    id: 14,
    value: false,
    title: "Hot Wheels Collector",
    description:
      "Exciting product launches, collectible vehicles & sets, special events, and news for fans of all ages.",
  },
  {
    id: 15,
    value: false,
    title: "Mattel Creations",
    description:
      "Nostalgia, remixed! Collaboration and reimagination result in bold takes on the Mattel brands you love.",
  },
  {
    id: 16,
    value: false,
    title: "Mattel Shop",
    description:
      "Latest info about our family of brands — Barbie, Hot Wheels, Cars, DC Universe, Toy Story & more.",
  },
  {
    id: 17,
    value: false,
    title: "Mattel Toy Stores",
    description:
      "New product info, exclusive in-store offers & promos, and special events at our retail locations.",
  },
];

export default function SubscribtionForm() {
  const [subscribtions, setSubscriptions] = useState(SUBSCRIBTIONS);
  const [selection, setSelection] = useState("");

  const onUnsubscribe = () => setSelection("unsubscribe");

  const onSubscribe = () => setSelection("subscribe");

  const onSubscribtionChange = (id) => {
    const list = [...subscribtions];
    list.forEach((item) => {
      if (item.id === id) {
        item.value = !item.value;
      }
    });
    setSubscriptions(list);
  };

  return (
    <main>
      <Container>
        <Form>
          <div className="row title-block">
            <h1>Update your email preferences</h1>
            <div className="container-fluid">
              <div className="title">
                <span>Your Email Address: </span>
                <span className="desc" id="useremailId">
                  vairamuthu.gs@mattel.com
                </span>
              </div>
              <p>Choose an option below:</p>
            </div>
          </div>

          <div className="row radio-button unsubscribe" onClick={onUnsubscribe}>
            <input
              type="radio"
              id="unsubscribe"
              checked={selection === "unsubscribe"}
              onChange={onUnsubscribe}
            />
            <label htmlFor="unsubscribe">
              Unsubscribe
              <p>Please remove me from all email subscriptions</p>
            </label>
          </div>

          <div className="row radio-button" onClick={onSubscribe}>
            <input
              type="radio"
              id="subscribe"
              checked={selection === "subscribe"}
              onChange={onSubscribe}
            />
            <label htmlFor="subscribe">Change my email preferences</label>
          </div>

          <div className="row subscribtions">
            {subscribtions.map((item) => (
              <Subscribtion
                disabled={selection !== "subscribe"}
                key={item.id}
                {...item}
                onSubscribtionChange={onSubscribtionChange}
              />
            ))}
          </div>

          <div className="row">
            <button type="submit" className="btn btn-primary btn-normal">
              UPDATE
            </button>
          </div>
        </Form>
      </Container>
    </main>
  );
}
