# Alex Leigh's Portfolio Site
* Located at [daleighan.com](https://daleighan.com)
* Uses the api found [here](https://github.com/daleighan/personal-site-api)

### To Run Locally
* Clone this repository locally and the go into it's folder
* Make sure the API is running either locally or deployed 
* In the file `store/actions/projectActions.js` file replace the urls in the two requests with the url of the API. If using a deployed version, CORS must be enabled in the AWS console in the API Gateway section
* run `npm run dev && npm start` and then visit [localhost:1337](http://localhost:1337) in the browser

### To Deploy to AWS S3
* The AWS CLI tool must be installed
* A deployed version of the API must be used
* Create an S3 bucket with the AWS console. Make sure that it is configured to be used as a static website
* Run the following command to copy all files from the static folder into the bucket `npm run build && aws s3 cp ./static/ s3://yourbucketnamehere --recursive`
* Visit the site at `http://yourbucketnamehere.s3-website-us-east-1.amazonaws.com/` in your browser. If your s3 bucket is in a different region, the url will need to be adjusted to reflect it
