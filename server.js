if server.api = true
  ping 1.3.3.5, 0.0.0.0
if server.api = false
  shutdown();

http:request = ("https://api.cloudflare.com/client/v4/")

user.username.get
SetUser();
Prompt ("08-387", 1.0.3.5,api)
