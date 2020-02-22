# Development Notes

Generic notes ideas and notes about Slipmat3 development.

- We should use something like rewrites in the frontend for urls like `/api/` to be able to make xhr calls without triggering CORS.

## Random ideas

- Should be offer a stream forwarding option as well? It would be fairly easy to implement on top of the streamer and it would probably add value to those DJs who multistream.
- Providing an Oauth2 server would enable us to allow DJs to implement a "Sign In via Slipmat.io" flow and enable things like Slipmat commenting and other features in third-party sites. Tuulipukukoodi could be a good test ground here. (In practise this would lower the barrier for listeners to participate outside of events as they wouldn't need another account to do so.)
- Our **static media** is 90% event images which again are relevant for fairly short time (typically ~30 days total). We should probably design a method for hosting these from CDN at first but later via a normal Whitespace-powered Nginx setup straight from our app servers which have unlimited transfer per month. This could easily be done w/ two distinct medial URLs for any resource, plus [B2 lifetime rules](https://www.backblaze.com/b2/docs/lifecycle_rules.html) together with CloudFront CDN. (Low prio.)
- Should the site be **invite-only**? At least before the official launch.
- We **shouldn't offer a free tier** because it leads to all kinds of problems in the long run. Offer a super cheap low-end tier instead and a long 30 day free trial w/o credit card. (Also, allow fans for support this very low fee for you - that way the payment should not be a burden and the platform doesn't need to be unsustainable.)
