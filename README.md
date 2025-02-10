# Horoscope API

A RESTful API that scrapes the internet to get your horoscope reading.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

---

**API Endpoint:** <https://astro-horoscope-api.herokuapp.com/>

**Usage:** `?date=<date>&sign=<sign>`

| Parameter | Accepted Values                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------- |
| date      | today, tomorrow, yesterday                                                                          |
| sign      | aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces |

---

**Build & Run**

1. Clone the repository:

```bash
git clone https://github.com/yourusername/horoscope-api.git
cd horoscope-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

The API will be available at `http://localhost:3000`

---

**Notes**

1. This API scrapes <https://www.astrology.com/> unofficially.
