import { useEffect, useState } from 'react';
import './App.css';
const axios = require('axios');

function App() {
  const [quotes, setQuotes] = useState(null);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    async function getQuotes() {
      const quotesState = await axios.get(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      );
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = '#' + randomColor;
      setQuotes(quotesState.data.quotes);
      setQuote(quotesState.data.quotes[0].quote);
      setAuthor(quotesState.data.quotes[0].author);
    }
    getQuotes();
  }, []);

  const handleClick = () => {
    let randomItem = quotes[Math.floor(Math.random() * quotes.length)];
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setQuote(randomItem.quote);
    setAuthor(randomItem.author);

    document.body.style.backgroundColor = '#' + randomColor;
  };

  return (
    <div className="quoteBox" id="quote-box">
      <h2 id="text">"{quote}"</h2>
      <h3 id="author">-{author}</h3>
      <div id="buttons">
        <button id="new-quote" onClick={handleClick}>
          Get random quote
        </button>
        <a
          without
          rel="noreferrer"
          href={`https://twitter.com/intent/tweet?text=${quote}-${author}`}
          target="_blank"
          id="tweet-quote"
        >
          <span>
            <img
              alt="twitterIcon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACfUlEQVRIie3WXaiOWRQH8J+XoxAn5ojBpHDDXMzIhZHSodxRGJxzp0iMmgtcGCUXYhpKIVdD5CMSckEpJzPiyjQ+DhINvTmaaE4+881x5mI9bx6Pl/d5eWeu/G+enr322v+91/6vtTaf8T+hS43W6YXvMQENuIPfcQDPMnyjca6QGliBwR9BOhV/YTU60IqXyf9VTEo2Mwdn8SeGlJwnoxMX0a8K0iY8x1LUZWxd8SOe4hVu4AWOpCf9ioM4hEv4KgfpIDzC3ArzvsUYbBaHu4DzJeNvqV1vQzumVFhwHU7m2CD8jNe4nZCvLBlO4KfUxEV4LKIw8j2LXcSCnMT14jr/xl4pUW/C/szk4Qlxh7iXZvRN2R8I4eTBF7gvwt01bRgrZD+0jNM32CJSpEPc0T4hmmk5iUeIENeXBkrpNBBF7EHvjFMr5mMAGrEDD9GC6zmJG4SiH2YNfyQ76hS5VqvCUsJ0tKUHuiXfogjlVnHizhoTD8PNcoZmIZb6csYa4CjWlDN0F+mx6z8g7YEnoo6Xxdf4RwislidvEteYLalvYYm43yfYLpNzH4EuojyuyhoKmf9RoqCfSHb5qZgiCtHGShNHinxrrgFpH5Hnv+R1WCiq2Fyfls+7cQ09q3Fqwj2h9LUqd6osfhA6GVOlH0LZLUJsx6rwmy8eBzOrIasTb6LluCI6yjJvKtyH0B3rRfOYlYfsssjfdtF9XgpVL5Y/nxtFMyniu5w+JuKMCOlh8VTJg56YjeMitBu829nei5JqC5iBeeKl0IZTIhq3RPgKoqEPSzY3Xry5dooGX8xLmiZO40sRunEir/snJ3mNuwnBJfFuPi0KzmdUxL+C/JAL8th1xwAAAABJRU5ErkJggg=="
            />
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
