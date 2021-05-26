# Color Picker app

This project uses ReactJs, Apollo, Graphql, Hasura.

## Hosted at
https://color-picker-azebqevz9-mayan-sharma.vercel.app/

## Local installation

- git clone `https://github.com/mayan-sharma/color-picker.git`
- cd color-picker
- create a `.env` file

```
REACT_APP_APOLLO_URI=''
REACT_APP_WSS_URI=''
REACT_APP_HASURA_ADMIN_SECRET=''
```

## Cache persistence
### Issue
- Cache does not persist on refreshing after a GraphQL mutation.

### Solution
- Use and `update` parameter on `useMutation`
