

**REACT-STATESAFE**


**Description:** react-statesafe is a lightweight npm package designed as a router for React applications which preserves states between route changes. It provides alternative routing functionalities and components to streamline navigation within React-based web applications.

**Installation:** You can install react-statesafe via npm by running the following command:



```bash
 npm install react-statesafe
 ```

**Usage:**

```javascript
// import the functions
import { Route, getState, Link } from 'react-statesafe';
```
```javascript
// Define routes using the Route component
<Route path='/' component={LandingPage} />
<Route path='/Contact' component={Contact} />
```
```javascript
// Use the Link component for navigation without page refresh
<Link href='/' state={{ data: "from HomePage", data2: "something else" }}>Go to contact</Link>
```
```javascript
// Retrieve saved state using getState function
console.log(getState());
```

**Components:**

-   **Route:** An alternative route element for routing between pages in a React application. No need to wrap them in any parent wrapper.
-   **Link:** A replacement for `<a>` tag which facilitates navigation without triggering a page refresh. It also supports passing a state object to preserve data across routes without using URL parameters.
-   **getState:** Function to retrieve the saved state, if any, within the application.



**Note:**

-   Ensure that the state passed to Link is serializable to avoid any issues with preservation and retrieval.
-   Utilize Route and Link components as replacements for traditional routing and navigation elements within your React application for improved performance and user experience.

**Contributing:** Contributions to react-statesafe are welcome! Feel free to submit issues or pull requests on the GitHub repository: react-statesafe GitHub Repository

**License:** This project is licensed under the MIT License - see the LICENSE file for details.
