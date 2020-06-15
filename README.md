# gatsby-remark-hypher

A thin wrapper around [`remark-hypher`](https://github.com/siawyoung/remark-hypher), for use with Gatsby. Please see `remark-hypher` for information and documentation on usage.

## Getting started

``` javascript
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-hypher",
          options: {
            leftmin: 3,
            rightmin: 2,
            minLength: 6,
          },
        },
      ],
    },
  },
]
```

The options object is the same one as documented in `remark-hypher`.
