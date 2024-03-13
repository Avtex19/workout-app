import HomeCSS from '../home.module.css';

export function RandomQuotes(){

        const quotes = [
    {"quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
    {"quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
    {"quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
    {"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
    {"quote": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein"},
    {"quote": "The only person you should try to be better than is the person you were yesterday.", "author": "Anonymous"},
    {"quote": "The journey of a thousand miles begins with one step.", "author": "Lao Tzu"},
    {"quote": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
    {"quote": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis"},
    {"quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "author": "Christian D. Larson"},
    {"quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "author": "Albert Schweitzer"},
    {"quote": "The only way to achieve the impossible is to believe it is possible.", "author": "Charles Kingsleigh"},
    {"quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", "author": "Jordan Belfort"},
    {"quote": "Your time is limited, don't waste it living someone else's life.", "author": "Steve Jobs"},
    {"quote": "Challenges are what make life interesting, and overcoming them is what makes life meaningful.", "author": "Joshua J. Marine"},
    {"quote": "Hardships often prepare ordinary people for an extraordinary destiny.", "author": "C.S. Lewis"},
    {"quote": "The secret of getting ahead is getting started.", "author": "Mark Twain"},
    {"quote": "You don’t have to be great to start, but you have to start to be great.", "author": "Zig Ziglar"},
    {"quote": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius"},
    {"quote": "The only person you should try to be better than is the person you were yesterday.", "author": "Anonymous"},
    {"quote": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis"},
    {"quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.", "author": "Albert Einstein"},
    {"quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
    {"quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
    {"quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
    {"quote": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein"},
    {"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
    {"quote": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
    {"quote": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis"},
    {"quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "author": "Christian D. Larson"},
    {"quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "author": "Albert Schweitzer"},
    {"quote": "The only way to achieve the impossible is to believe it is possible.", "author": "Charles Kingsleigh"},
    {"quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", "author": "Jordan Belfort"},
    {"quote": "Your time is limited, don't waste it living someone else's life.", "author": "Steve Jobs"},
    {"quote": "Challenges are what make life interesting, and overcoming them is what makes life meaningful.", "author": "Joshua J. Marine"},
    {"quote": "Hardships often prepare ordinary people for an extraordinary destiny.", "author": "C.S. Lewis"},
    {"quote": "The secret of getting ahead is getting started.", "author": "Mark Twain"},
    {"quote": "You don’t have to be great to start, but you have to start to be great.", "author": "Zig Ziglar"},
    {"quote": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius"},
    {"quote": "The only person you should try to be better than is the person you were yesterday.", "author": "Anonymous"},
    {"quote": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis"},
    {"quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.", "author": "Albert Einstein"},
    {"quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
    {"quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
    {"quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt"},
    {"quote": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein"},
    {"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
    {"quote": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
    {"quote": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis"}
]


    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

    return <div className={HomeCSS['quotes-wrapper']}>

        <h1>{randomQuote.quote}</h1>
        <p> - {randomQuote.author}</p>
    </div>



}

export default RandomQuotes;