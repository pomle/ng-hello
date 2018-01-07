# NG Hello

Before starting I spent about 2 days thinking about the assignment. I decided to make the white listing feature a core intergration in my solution.

With this approach there is no special whitelist exposed to the user, instead the UI allows the user to add an address, or toggle an existing. If any address have been toggled (whitelisted) it will display whitelisted addresses in green, and non-whitelisted in grey with their balance striked.

In the case where an address is whitelisted but have no entry, it will be displayed as pending and the user is able to cancel.

If any whitelist entry exists, the user is able to sort whitelisted first.

Since I have not used Angular before and am fluent in React I prototyped the solution in React and spent around 2 hours. I then ported this solution into Angular and spent around 4 additional hours.

## Run
```bash
git clone git@github.com:pomle/ng-hello.git
cd ng-hello
npm install
ng serve --open
```

