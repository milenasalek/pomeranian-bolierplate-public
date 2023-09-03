import './styles.css';
export const Blog2 = () => {
  return (
    <div>
      {/* First Blog Entry */}
      <div className="blog-container">
        <div className="blog-date">30-11-2022</div>

        <div className="blog-content"></div>
        <h1 className="blog-title">Why are we so nostalgic for the 1990s?</h1>
        <p className="blog-text">
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own.
        </p>
        <p className="blog-text">
          There's been the resurgence of vinyl as the trend-setters' choice of
          music consumption rather than the ease of a digital download, and now
          the hipsters have discovered the nostalgic sound of a whirring
          cassette from which to enjoy the dulcet tones of everyone from
          Salt-N-Pepa to Rick Astley.
        </p>

        <div className="blog-author">
          <p className="blog-author-name">Radosława Majdan</p>
          <p className="blog-author-role">Senior Marketing Specialist</p>
        </div>
      </div>
      <p></p>
      {/* Second Blog Entry */}
      <div className="blog-container">
        <div className="blog-date">30-11-2022</div>

        <div className="blog-content">
          <h1 className="blog-title">I make mistakes!</h1>
          <p className="quote">
            “I’m selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can’t handle
            me at my worst, then you sure as hell don’t deserve me at my best.”
          </p>
          <p className="quote-author">Marilyn Monroe</p>
        </div>

        <div className="blog-author">
          <p className="blog-author-name">Radosława Majdan</p>
          <p className="blog-author-role">Senior Marketing Specialist</p>
        </div>
      </div>
      <p></p>
      {/* Third Blog Entry */}
      <div className="blog-container">
        <div className="blog-date">30-11-2022</div>

        <div className="blog-content">
          <h1 className="blog-title">
            18 Record-Breaking, Controversial, and Weird Facts
          </h1>
          <p className="blog-text">
            The death of Queen Elizabeth II on September 8 at the age of 96
            represents a monumental shift for the British monarchy and the
            people of England. Royals have died before, of course, but the Queen
            ruled for more than 70 years, and represented a certain stability
            and decorum that held the institution of the Royal Family together
            as it slowly grew more visibly anachronistic and battered by endless
            scandals.
          </p>
        </div>

        <div className="list">
          <ul>
            <li>
              <strong>WP.PL 1</strong>
            </li>
            <p className="gap"></p>
            <li>
              <strong>WP.PL 2</strong>
            </li>
            <p className="gap"></p>
            <li>ONET.PL</li>
          </ul>
        </div>

        <div className="blog-author">
          <p className="blog-author-name">Radosława Majdan</p>
          <p className="blog-author-role">Senior Marketing Specialist</p>
        </div>
      </div>
    </div>
  );
};
