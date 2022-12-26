function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 localhost:9050; SOCKS localhost:9050"
    
    if (!isResolvable(host)) {
        return PROXY;
    }
    // Apple.com via proxy
    if (shExpMatch(host, "*.onion")) {
         alert(host + " passed!")
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
