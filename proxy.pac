function FindProxyForURL(url, host) {
    PROXY = "SOCKS localhost:9050”

    // Apple.com via proxy
    if (shExpMatch(host,”*.onion)) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
