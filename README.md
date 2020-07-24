## Third letter API
A small API that sends back every third letter of a string

You can run the API by sending a POST request to https://third-letter.herokuapp.com/test 

Pass in the body of the request a Javascipt Object, with key `"string_to_cut"` and the value the string you want cut.
Ex.
`{
    "string_to_cut": "howsitgoingtoday"
}`

Headers should have `Content-Type: application/json`

To try out run this in terminal.
```js
curl -X POST http://third-letter.herokuapp.com/test --data '{"string_to_cut": "howsitgoingtoday"}' -H 'Content-Type: application/json'`
