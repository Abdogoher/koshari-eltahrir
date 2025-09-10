import React from 'react'

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import koshri1 from '../../assets/images/كشري1.png'
import koshri2 from '../../assets/images/كشري2.jpg'
import koshri3 from '../../assets/images/كشري3.jpg'
import koshri4 from '../../assets/images/كشري4.jpg'
import koshri5 from '../../assets/images/كشري5.jpg'
import koshri6 from '../../assets/images/كشري6.jpg'
import koshri7 from '../../assets/images/كشري7.jpg'
import koshri8 from '../../assets/images/كشري8.jpg'
const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({
  items = [
    {
      title: "كشري صغير",
      price: "20$",
      img : koshri1
    },
    {
      title: "كشري وسط",
      price: "25$",
      img : koshri2
    },
    {
      title: "كشري كبير",
      price: "30$",
      img : koshri3
    },
    {
      title: "كشري كبير اوي",
      price: "35$",
      img : koshri4
    },
    {
      title: "كشري ضخم",
      price: "50$",
      img : koshri5
    },
    {
      title: "طاجن فراخ صغير",
      price: "20$",
      img : koshri6
    },
    {
      title: "طاجن فراخ وسط",
      price: "25$",
      img : koshri7
    },
    {
      title: "طاجن فراخ كبير",
      price: "30$",
      img : koshri8
    },
    {
      title: "طاجن فراخ كبير اوي",
      price: "35$",
      img : koshri1
    },
    {
      title: "طاجن فراخ ضخم",
      price: "50$",
      img : koshri2
    },
    {
      title: "طاجن لحم صغير",
      price: "20$",
      img : koshri3
    },
    {
      title: "طاجن لحم وسط",
      price: "25$",
      img : koshri4
    },
    {
      title: "طاجن لحم كبير",
      price: "30$",
      img : koshri5
    },
    {
      title: "طاجن لحم كبير اوي",
      price: "35$",
      img : koshri6
    },
    {
      title: "طاجن لحم ضخم",
      price: "50$",
      img : koshri7
    }
  ],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1
}) => {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleScroll = e => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = e => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth'
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-3/5 mx-auto ${className}`}>
      <div
        ref={listRef}
        className={`max-h-full overflow-y-auto p-4 ${
          displayScrollbar
            ? '[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-[#060010] [&::-webkit-scrollbar-thumb]:bg-[#222] [&::-webkit-scrollbar-thumb]:rounded-[4px]'
            : 'scrollbar-hide'
        }`}
        onScroll={handleScroll}
        style={{
          scrollbarWidth: displayScrollbar ? 'thin' : 'none',
          scrollbarColor: '#222 #060010'
        }}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={0.1}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onItemSelect) {
                onItemSelect(item, index);
              }
            }}
          >
            <div className={`p-4 bg-brandOrange rounded-lg ${selectedIndex === index ? 'bg-brandOrange' : ''} ${itemClassName}`}>
              <div className='flex justify-between items-center px-1 md:px-8 text-xs md:text-2xl'>
                <p className="text-brandYellow ">{item.title}</p>
                <p className=''>{item.price}</p>
                <button className='text-brandYellow bg-red-600 hover:bg-red-700 px-1 md:px-3 py-0 md:py-2 text-xs md:text-lg rounded-lg md:rounded-2xl'>اطلب الأن</button>
                <img className='w-12 md:w-32 rounded-lg ' src={item.img} alt='...' />
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px] pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
};

export default AnimatedList;

