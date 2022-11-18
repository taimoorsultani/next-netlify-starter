import { SubscribtionWrapper } from 'hoc';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Checkbox from './CheckBox';

import Subscribtion from './Subscription';

// const SUBSCRIBTIONS = [
//   {
//     id: 10,
//     value: false,
//     title: 'Barbie',
//     description:
//       'Toys for storytelling play, special events, latest news, and inspiring ways to be anything with Barbie.',
//   },
//   {
//     id: 11,
//     value: false,
//     title: 'Barbie Signature',
//     description:
//       'Stylish dolls & keepsakes, collector info, special events, and hottest news about the fashion icon.',
//   },
//   {
//     id: 12,
//     value: false,
//     title: 'Fisher-Price',
//     description:
//       'Get the latest info on our newest baby gear and toys for all children, 0-5 years old.',
//   },
//   {
//     id: 13,
//     value: false,
//     title: 'Hot Wheels',
//     description:
//       'Epic new cars & sets, action-packed events, and info celebrating 50+ years of revving imagination.',
//   },
//   {
//     id: 14,
//     value: false,
//     title: 'Hot Wheels Collector',
//     description:
//       'Exciting product launches, collectible vehicles & sets, special events, and news for fans of all ages.',
//   },
//   {
//     id: 15,
//     value: false,
//     title: 'Mattel Creations',
//     description:
//       'Nostalgia, remixed! Collaboration and reimagination result in bold takes on the Mattel brands you love.',
//   },
//   {
//     id: 16,
//     value: false,
//     title: 'Mattel Shop',
//     description:
//       'Latest info about our family of brands — Barbie, Hot Wheels, Cars, DC Universe, Toy Story & more.',
//   },
//   {
//     id: 17,
//     value: false,
//     title: 'Mattel Toy Stores',
//     description:
//       'New product info, exclusive in-store offers & promos, and special events at our retail locations.',
//   },
// ];

export default function SubscribtionForm({ activeRegion }) {
  const [userEmail, setUserEmail] = useState('email@email.com');
  const [subscribtions, setSubscriptions] = useState(activeRegion.brandImage);
  const [contentTypeList, setContentTypeList] = useState(
    activeRegion.contentTypeList
  );
  const [myInterestList, setMyInterestList] = useState(
    activeRegion.myInterestList
  );
  const [myRetailersList, setMyRetailersList] = useState(
    activeRegion.myRetailersList
  );

  const onSubscribtionChange = (id) => {
    if (id === 18) {
      const allItem = subscribtions.find((item) => item.id === id);
      const list = [...subscribtions];
      list.forEach((item) => {
        item.selection = !allItem.selection;
      });
      setSubscriptions(list);
      return;
    }
    const list = [...subscribtions];
    list.forEach((item) => {
      if (item.id === id) {
        item.selection = !item.selection;
      }
    });
    setSubscriptions(list);
  };

  const onContentTypeChange = (id) => {
    const list = [...contentTypeList];
    list.forEach((item) => {
      if (item.id === id) {
        item.selection = !item.selection;
      }
    });
    setContentTypeList(list);
  };

  const onMyInterestChange = (id) => {
    const list = [...myInterestList];
    list.forEach((item) => {
      if (item.id === id) {
        item.selection = !item.selection;
      }
    });
    setMyInterestList(list);
  };

  const onMyRetailersChange = (id) => {
    const list = [...myRetailersList];
    list.forEach((item) => {
      if (item.id === id) {
        item.selection = !item.selection;
      }
    });
    setMyRetailersList(list);
  };

  return (
    <div className="row">
      <div className="col-md-1 col-sm-12"></div>
      <div className="col-md-10 col-sm-12">
        <Form>
          <div className="row title-block">
            <h1>{activeRegion.heading}</h1>
            <div className="container-fluid">
              <div className="title">
                <span className="label">{activeRegion.yourEmailAddress}</span>
                <span className="desc" id="useremailId">
                  {userEmail}
                </span>
              </div>
            </div>
          </div>

          <div className="row main-content">
            <h3>{activeRegion.changePreferences}</h3>

            <SubscribtionWrapper
              title={activeRegion.myBrands}
              description={null}
            >
              {subscribtions.map((sub) => (
                <Subscribtion
                  {...sub}
                  key={sub.id}
                  onSubscribtionChange={onSubscribtionChange}
                />
              ))}
            </SubscribtionWrapper>
            <SubscribtionWrapper
              title={activeRegion.contentType}
              description={activeRegion.contentTypeDescription}
            >
              {contentTypeList.map((item) => (
                <Checkbox
                  {...item}
                  key={item.id}
                  onSubscribtionChange={onContentTypeChange}
                />
              ))}
            </SubscribtionWrapper>
            <SubscribtionWrapper
              title={activeRegion.myInterest}
              description={activeRegion.myInterestDescription}
            >
              {myInterestList.map((item) => (
                <Checkbox
                  {...item}
                  key={item.id}
                  onSubscribtionChange={onMyInterestChange}
                />
              ))}
            </SubscribtionWrapper>
            <SubscribtionWrapper
              title={activeRegion.myRetailers}
              description={activeRegion.myRetailersDescription}
            >
              {myRetailersList.map((item) => (
                <Checkbox
                  {...item}
                  key={item.id}
                  onSubscribtionChange={onMyRetailersChange}
                />
              ))}
            </SubscribtionWrapper>
            <div className="row button-row">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </Form>
      </div>
      <div className="col-md-1 col-sm-12"></div>
    </div>
  );
}
