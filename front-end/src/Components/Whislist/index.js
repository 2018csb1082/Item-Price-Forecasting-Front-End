import React from "react";
import PageLayout from "../PageLayout/PageLayout";
import Item from "../Item/Item";



export default function Whislist(props) {
  return (
    <PageLayout {...props}>
      <div className="wishlist-grid-container">
        <div className="wishlist-grid-item">
          <Item
            image="data:image/png;base64,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"
            name="Hello"
            link="https://www.flipkart.com"
          />
        </div>
        <div className="wishlist-grid-item">
          <Item
            image="https://lh3.googleusercontent.com/proxy/YILWh-w__0BhonBuOJ3HsfPWyBSwDzRsx3fLdxAOTrlc886035VAdPEF6MdGeUo0q3ZMt_2ARUCdqSXzRg8VtomJRYGL8RBHUrVEt44z161htpbblKET7W5qFvqQDlZMNHa6EMlK3BaK9a1a3P3zbBXOElZcoXE"
            name="Hello"
            link="https://www.amazon.com"
          />
        </div>
      </div>
    </PageLayout>
  );
}
