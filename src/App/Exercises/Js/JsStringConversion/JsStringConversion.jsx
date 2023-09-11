export const JsStringConversion = () => {
  // Liczenie ilosci pixeli na ekranie
  // fun("1080px", 1920px") => 2073600

  function calcResolution(x, y) {
    const clearedX = x.replace('px', '');
    const clearedY = y.replace('px', '');

    return +clearedX * +clearedY;
  }

  function isEmpty(x) {
    return !!x;
  }

  return (
    <div>
      <p>calcResolution: {calcResolution('1080px', '1920px')}</p>
      <p>isEmpty: {isEmpty(NaN).toString()}</p>
    </div>
  );
};

//sprawdzanie czy wprowadzona wartosc nie jest pusta
/*function ilePixeli(wx, wy) {
    if (wx == '') {
      console.log('pusta');
    }

    wx = wx.slice(0, -2);
    wy = wy.slice(0, -2);
    const iloczyn = parseInt(wx) * parseInt(wy);
    return iloczyn.toString;
  }
  return (
    <div>
      <p>Integer: {ilePixeli('1080px', '1920px')}</p>;
    </div>
  );
  //console.log(ilePixeli('1080px', '1920px'));
};*/
