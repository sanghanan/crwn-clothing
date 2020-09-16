/* eslint-disable require-jsdoc */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => {
  return (
    <div>
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectioProps }) => (
          <PreviewCollection key={id} {...otherCollectioProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
