import React from 'react';
import AnimatedCard from './AnimatedCard.jsx';

import varsity from '/media/image/varsity.png';
import coin from '/media/image/coin (1).png';
import kite from '/media/image/kite.png';
import console from '/media/image/console.png';

function RightSection() {
  return (
    <div className="mt-4">
      <AnimatedCard
        img={varsity}
        title="Learn with Varsity"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        animation="zoom-in"
      />
      <AnimatedCard
        img={coin}
        title="Instant Coin Transfers"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        animation="fade-left"
        reverse
      />
      <AnimatedCard
        img={kite}
        title="Smart Kite Platform"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        animation="fade-up"
      />
      <AnimatedCard
        img={console}
        title="Developer Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        animation="slide-right"
        reverse
      />
    </div>
  );
}

export default RightSection;
