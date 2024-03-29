<h1 align="center">Ecommerce-WebApp</h1>
<p align="center">This repository consist of prototype build of ecommerce app along with docker implementation.The backend for the app was built from scratch consisting of Authentication, Token Generation, Sequelize Data Model, Category and Product Controllers, Middleware and Routes properly configured. <br>Endpoints for each specific request was created in the form of REST APIs.</p>


## Environments:
1.development environment\
2.test env(SIT)\
3.Pre-production env.\
4.Prod Env\
note:sit,pre-pop, are just different servers in actual.

## Control Flow:
UI=>Server=>routes=>controller=>model=>config=>dbConnection

## Steps:
1.create a .env file in parent folder and initialize a port in it.\
2.create a server.config.js file inside config directory and set the environment port config and export it, now we can use that port for our server.\
3.create index.js inside routes dir to manage such individual requests separately and use it in server js. using app.use()(refer:https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get).

## Responses:
### res.end():
->should be used after res.write() and res.status() to indicate that there is no further data to be received.\
->not required after res.json() and res.send() as it already indicates sending of data and completion.\
->cannot be used instead of return;\
### res.writeHead():
->cannot be used before res.send and res.json.\
->to be used before res.write.\
### res.send():
->we can directly send the data received using sequelize.findAll() without the need of converting it to json and sending it using res.write.\
->we don't need res.end() to end the response.\
->can't send variables, throws error invalid status code.
### bodyParser.json()
-> the bodyParser is a middleware module used for parsing the request body in HTTP requests. It allows you to extract data from the request body, which can be in various formats such as JSON, URL-encoded, or multipart form data. The bodyParser module has been deprecated since Express 4.16.0, and the recommended alternative is to use the express.json() and express.urlencoded() middleware functions provided by Express itself.
### next()
->The next function is needed whenever app.use(express()) is used else the functions below it or the app.get below it won't get executed.\
->next function not required for router.use()
### Status:
->status code to be set before a response is made else it won't be received at the user end.

## API
### ecomm/api/v1/products/:productid
->to get the values after / from the api call.\
eg: http://localhost:8080/ecomm/api/v1/products/2 \
we can access that value 2 using req.params.productid;

#### Refactoring:
->Using Facade design pattern

#### Status Code:
->204: cannot return anything except the code. used for successful updation and deletion

## Sequelize:
### Model synchronization:
modelname.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)\
modelname.sync({ force: true }) - This creates the table, dropping it first if it already existed.\
modelname.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.\
await seqInstance.sync({ force: true }) - to automatically synchronize all models.

NOTE:seqInstance.sync({ force: true }) syncs only the models that are imported to the file where this command is present.

### CRUD:
modelname.findOne()//returns the first hit\
modelname.findAll()\
modelname.findByPk()

modelnmae.update()//doesn't return an error even when nothing is passed in req.body or category id which is not present is passed.\
modelname.create()//returns error if duplicate name is inserted and also id gets autoincrement even for errors thus the next correct enrty doesn't have continous id.

modelname.findOrCreate()\
modelname.findAndCountAll()
NOTE: whether its find,update or delete we need to specify the where condition if it applies to all where needs to be { where: {} }.
### Model Values:
default\\error
defaultValue\\correct
type: string\\error
type: sequelize.STRING\\correct
## Handling error without stopping program execution:
-> use try and catch if not used the app crashes on error, can also use finally which always gets executed.\
-> use throw new Error("Enter the string here");\
-> throw is javascript keyword and Erro is JS class.\
-> error Handler should always be at the end of middleware.

### await():
-> not only makes the function wait till its execution but also returns true or false for the given operation.

### Window vs Doument:
In DOM document is part of the window.

## Testing:
1.unit(forming many test case for a function and checking it)\
2.automation\
3.TDD(Test driven Development)

## Validation:
->Validators are used to validate before going into controller function \
->Validators are second parameter in the Router calls(get,post,put,delete,etc.,), for instance \
```
categoryRouter.post(
  "/",
  [requestValidator.requestValidatorForCategoryName],
  categoryController.addNewCategory
);
```
eg: requestValidator.requestValidatorForCategoryName(importName.FunctionName) \
-> this function is used to check if there is a valid input in the request body, for instance
```
const requestValidatorForCategoryName = (req, res, next) => {
    if (!req.body.name) {
      res.status(400).send("category name key must be passed");
      return;
    }
    next();
};
```
## Filter:
->passed in url,?filtername=value.\
->separate query parameters using &(?minPrice=200&maxPrice=20000)\
->if(Object.keys(req.query).length==0) condition becomes true when  no query parameter is passed.

### Async:
-> any function call line inside async function doesn't wait for the line to be executed and return goes on to the next line if await is not mentioned.

## GIT
->Branching vs Trunking(Latest)
## Debugging in VS Code: 
->Ctrl+Shift+D to go to run and debug.\
->Then click on show all automatic debug configurations and select Node js\
->Ctrl+Shift+P and type toggle auto attach and select and then select smart.\
->now run the js file with breakpoints added the debugger will auto attached.\
->f5-for next break point.\
->f10-for next step.\
->f11-to step into a funtion.\
->shift+f11-to step out.\
->use watch to watch a specific variable.
