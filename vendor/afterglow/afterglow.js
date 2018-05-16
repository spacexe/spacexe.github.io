/**
 * afterglow - An easy to integrate HTML5 video player with lightbox support.
 * @link http://afterglowplayer.com
 * @version 0.4.1
 * @license MIT
 * 
 * afterglow includes some scripts provided under different licenses by their authors. Please see the project sources via http://afterglowplayer.com in order to learn which projects are included and how you may use them.
 */
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}! function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (n) {
        o.innerText = e
    }
}(document, ".video-js .vjs-big-play-button,.video-js .vjs-captions-button,.video-js .vjs-chapters-button,.video-js .vjs-control.vjs-close-button,.video-js .vjs-fullscreen-control,.video-js .vjs-mouse-display,.video-js .vjs-mute-control,.video-js .vjs-mute-control.vjs-vol-0,.video-js .vjs-mute-control.vjs-vol-1,.video-js .vjs-mute-control.vjs-vol-2,.video-js .vjs-play-control,.video-js .vjs-play-control.vjs-playing,.video-js .vjs-play-progress,.video-js .vjs-subtitles-button,.video-js .vjs-volume-level,.video-js .vjs-volume-menu-button,.video-js .vjs-volume-menu-button.vjs-vol-0,.video-js .vjs-volume-menu-button.vjs-vol-1,.video-js .vjs-volume-menu-button.vjs-vol-2,.video-js.vjs-fullscreen .vjs-fullscreen-control,.vjs-icon-audio-description,.vjs-icon-cancel,.vjs-icon-captions,.vjs-icon-chapters,.vjs-icon-circle,.vjs-icon-circle-inner-circle,.vjs-icon-circle-outline,.vjs-icon-cog,.vjs-icon-facebook,.vjs-icon-fullscreen-enter,.vjs-icon-fullscreen-exit,.vjs-icon-gplus,.vjs-icon-hd,.vjs-icon-linkedin,.vjs-icon-pause,.vjs-icon-pinterest,.vjs-icon-play,.vjs-icon-play-circle,.vjs-icon-replay,.vjs-icon-spinner,.vjs-icon-square,.vjs-icon-subtitles,.vjs-icon-tumblr,.vjs-icon-twitter,.vjs-icon-volume-high,.vjs-icon-volume-low,.vjs-icon-volume-mid,.vjs-icon-volume-mute{font-family:VideoJS;font-weight:400;font-style:normal}.video-js,.vjs-no-js{color:#fff;background-color:#000}.video-js .vjs-big-play-button:before,.video-js .vjs-control,.video-js .vjs-control:before,.vjs-menu li,.vjs-no-js{text-align:center}.video-js .vjs-big-play-button:before,.video-js .vjs-control:before,.video-js .vjs-modal-dialog,.vjs-modal-dialog .vjs-modal-dialog-content{position:absolute;top:0;left:0;width:100%;height:100%}@font-face{font-family:VideoJS;src:url(font/VideoJS.eot?#iefix) format(\"eot\")}@font-face{font-family:VideoJS;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAA4wAAoAAAAAFfAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAD4AAABWUZFeBGNtYXAAAAE0AAAAOgAAAUriLxC2Z2x5ZgAAAXAAAAnnAAAO5OV/F/5oZWFkAAALWAAAACsAAAA2C4eUa2hoZWEAAAuEAAAAGAAAACQOogcfaG10eAAAC5wAAAAPAAAAeNIAAABsb2NhAAALrAAAAD4AAAA+MMgtQm1heHAAAAvsAAAAHwAAACABLwB5bmFtZQAADAwAAAElAAACCtXH9aBwb3N0AAANNAAAAPkAAAF5vawAenicY2BkZ2CcwMDKwMFSyPKMgYHhF4RmjmEIZzzHwMDEwMrMgBUEpLmmMDh8ZPwoyw7iLmSHCDOCCADu/Qo9AAB4nGNgYGBmgGAZBkYGEHAB8hjBfBYGDSDNBqQZGZgYGD7K/v8PUvCREUTzM0DVAwEjG8OIBwCOWgbUAAB4nI1XfVBU1xV/574vlsUlj/14grDs48FuAgaR3X2LEnY3UZSgEkTwAySAgkIwI8bRfFDjTszYCWRMW9lNa4y2meokmq+2k5ia0dpkmknbkWgSSW3GyaaNf0RTx0wxX7A3Pe/tQmIgHXf3vXvvueeee+45v3POXQYY/PCD/CBDGAYkIE2sxg+OXSJmhmH1OaFX6MU5C5PDMCZi5Rg2i+ELGSthwM14NCbgYGSBIZfhFA1H6Zu0OS0NDkMVfg+npdFm+maCvigI0JBIQIMg0BdJGdTj9ylj7nr+b97+Hl8C1+H2xNAvjPqxjIgaKtItICkSnIISeo40QQls4xxjlzgHsnGGvi7BxQiMlSlkPMhfCh67rAUEUQ6CHxW2O7JARCkKnlUQ7UEIyAEQZe4MdDW9xr5OPFuKbubpRxcPDY8da4MOelDfAYJLW+sGKn/Vlmjfv5+NdB4oOfTazJn3tGxZtL9xFNZX7PPRUbjcRg/SMB2EL+gblXn7shbO/WUbF9u/H5XQ9eKO8iMMr9tY35qYoRi20wGuXV/CHaGDk2fdgHwCk5HUXQpCcgHfBV2NjV3jkq4PHTSUSBwuOQALvxPAps6fiftk6P6yJpcm5bB4dFkgoh195mbiSTnkL3jupq7jh4ZZdvjQRVB4PPx3SsVTu5D/6kd85RU66ttXAeuuXYN1E/Y2sMMzZkZiZNRZlRS/ynr9Xr8Cql2RVNbutXslYo7B9ngsFqcDbCQO22PxeIxcpgMxkh6PjUdwkvw6hvRpZeoCFKshDQzJVr++DWyLx+hAXJcGp3TJMV1ME45xCNvHLsWRrpOZSduOoG0zERuIIwuIkhNkBREglQKLiODD45FQE0BTiE214xE2wp8zOt9NjH3GRtDMk7Ehoq2tzCzGxdyMEQJuD0qGIrQ58ApoWQE3D2h1h6zwuB14wYFIDAA5CZ11jT+92gFZ7B7/p7+hV8jFxBl4aG03wLiVXtBbCylLfIJzkPUAvWAw0yvsVdKdBbC6nnruP/RFkHqWJLZ2Auxdtgy+6qTf7l1WswTJcJ6mGVxwXj92UtfU2WXUNX+qBUCxK6D4FR4f/cufG1sZbiSkMcwdMdoxBxTTEXIp4SCXMNhHoFjvTTFP4vkoPReNRmPRCTwa+3qY0DR7qn7Vjh612wRRTaI04HWCnZ+gIzvS/ZJP0+mynphCui4hzmG0id6+aLSv2BV3FQMYDTHrlGQ/SZ+q4ZdF8aLa5Ar8GW3tVNKEj13cF0buMaesx1i9CL/Uo1tM0h+74o9HjQ+UcPaxy8mH9ccwK8KpKA3rHdIUjTKpfIBxuokpxUGBIILm84ATvHh8tAIe2iZj8KvYwUOXawHMVNgxZvlwSa0z8Zkokkxn3ey2nYTsbMO3mPh8cji7zklsPLD9a9f2s2w/uSt/FgSytWzw5bmS3PielU1P56aGrlz6NzlnbT8h/Wtb+1OxIqxBbC9g7kINUbtAEDxsKWSCe46eltCPmaiUxy2IrODIB8EmixaQrU4IAQ6THg6BFpAdWsCquT16DkL9ccIC/FGeP5AuiDExe8bx+QtzWVsmHcm0kdzqecdn5IhRkTc/zfNPm3ns5sw4Pq86l9gyofh6jkTF5iFChjYbbzZQWFvYb8qZAWyGiV9ya+5bFgnzpuWt3FuX8KYMmsiYZepPseBgGhZcOMt0+4Q8fDOTftJjHIuhdaLsFXFM9AclTi9jbGRq8ZvIOykZei77kfo53eoppVPovbGiyV63p/p/dkWETTjmhjTIm8RP284b04bcNYlRsvO6Gp2JeaiIueVHsgJGF2aASlCQLuG8EsBomzb++/AXmwhaOoLhL7iQ4/uc449gWJ56/XWDARn74v/PL1bRBB4TBEyYrqezSkUPHaWjPWCm13ogAzJ66LVpbTEuXccDZlyXxBQ/IrzKOPS7gAkkIyZ0N6joE6M246aDsO1kgucTJ/EdFWA5pbAcTfoSP4hJeBCni7nEn5IclL4kpDgmMMuH8Kpk0+WrBUIeKCyWS0nPVz7NW86Hnl55GxR5KB3+9tszL+wVRulXNTUn6D8SJvIl3PzP46eZST/tQTllTDXTzmxCaTYna7eJAqcWuD1ulBXQsMz5fQEBCfowCF5FVDF/2yysB9OW5veVEtRAFOy41FoeJEiAOZhDiFstsKAwJ8Hijs72q1jWvWx+uKU5XFZDLx189OK8ojW1u0By5dtLHUN/rwkte68PnhnYVbt0bvWiub9w1+f4C0L3hIuXZ8+xlVSt0eb3tgQsmVZnem5R3U0uf/fmFdqiLTvY3nPnet5/v4f9pLB6QX2krnnFQ1tXtN+2ePlAaUNWcfiWwrncn4ca9ml3hFeHHm+u2bq4MhxUZs3bMH/3jgaPUtlVunFjg2/8yRzf3cHsssKZqlnOqyCWworWykW9lXnspk0ffrjpfCreIpjPWbwnFxt3PAkcQgkUuH1auUMf+txJQ0hK1k1zsNaqQdaLMxfoq9AGGxtJQ+fGw53cE/TY8pWhJruZHiMAcCexFS/eGDp6hntiXGE/gvI7163b29ExfiHxNsnqub/a6/QmPoAn4GpZ2c9cZRX5/57IWUNYuubiQBAddhuxAKe6PA5vuV5dkk0VXkMM3zk42W3Awrgka8LQgjZY+tQIffd5+vnHasnHL/cczldyS4r79i6su6Nu9oPQ8lbaid2Pt9/bXtTTynevq7bkPkITV47d+3NugOzo4M3y77Zxbnb2nhWrl0T/kO4u3H1ig33e1lD6JDYjiKkCHOioF0pZv6T6gxxipxLNhFc8xERA48vq5ZfXdL/QV6c8W3PfwjIsZyI3Csvo72e4FpTVwTv/UYNAKtY+8MB84vogZ1Xr5lW38iJdPZ74xunzO4Gk7BARIkytjlyCoPVoIb3IluMfAYRhEoAO2aGXKc2TNAJaSwdzQEeq7jC7TWYF2Y2jrEIXlyVEhunBs5t7K62a7Z6qB0923/+vPT2v7mwpqV/mTEsTiCB5zz735HOP9VbVWtKKZK08uDJ7vcQN02HogGegY5iNnKUHh12ti9/zzHvsauy+tx+e375j94LuA64MV/5MQbZVNT95/re7jlxZVaVuW5Nffsd9TXfOpXcv6m2Bn3x6FgXg/oz+P0h/ce8g2mTEWxVTzzQzrTruNCcRdbu6VY87gLVXc4uSjXfosak7XxWM4oyl+ockmzCFhJXaGwK8e6sCW2T3sLmPnh5qSZtx9JHFL6QBHGnsTjdtWQ8PFygWtQTIkrI84NILfQSC65FUMFsnOYFHEoSmUCD49a4rt3985PTsd8GzB/5KEnzmhhORgVOZPM+yb5KmpRu38jQqviH6826Lrdrxx6DZdFPo2fVbTiy9AUpDJ3SxGYvpK7u+Rhz8D4BCxssAeJxjYGRgYABi/vcdWfH8Nl8ZuNkZQODSliXbkWl2BrA4BwMTiAIAKDsJfgB4nGNgZGBgZwCChWASxGZkQAVyABOTANd4nGNnYGBgHwAMADNUANMAAAAAAAAOAFAAZgCyAMYA5gEeAUgBdAGcAfICLgKOAroDCgOOA7AD6gQ4BHwEuAToBQwFogXoBjYGbAbaB3IAAHicY2BkYGCQY8hlYGcAASYg5gJCBob/YD4DABa6AakAeJxdkE1qg0AYhl8Tk9AIoVDaVSmzahcF87PMARLIMoFAl0ZHY1BHdBJIT9AT9AQ9RQ9Qeqy+yteNMzDzfM+88w0K4BY/cNAMB6N2bUaPPBLukybCLvleeAAPj8JD+hfhMV7hC3u4wxs7OO4NzQSZcI/8Ltwnfwi75E/hAR7wJTyk/xYeY49fYQ/PztM+jbTZ7LY6OWdBJdX/pqs6NYWa+zMxa13oKrA6Uoerqi/JwtpYxZXJ1coUVmeZUWVlTjq0/tHacjmdxuL90OR8O0UEDYMNdtiSEpz5XQGqzlm30kzUdAYFFOb8R7NOZk0q2lwAyz1i7oAr1xoXvrOgtYhZx8wY5KRV269JZ5yGpmzPTjQhvY9je6vEElPOuJP3mWKnP5M3V+YAAAB4nG2P2XLCMAxFfYE4CWlZSveFP8hHOY4gHhw79VLav68hMNOH6kG60mg5YhM22pr9b1vGMMEUM2TgyFGgxBwVbnCLBZZYYY07bHCPBzziCc94wSve8I4PbGeDFj/VydVSOakpG0T0VH1ZHXuq+xhoftHaHq+yV+21o1P7brWLWnvpiExNJpBb/i18q8D9ZxSOcj8oY8iVPjZBBU2+kGIIypokuqTI+cx3qXMq7Z6PQIsx1DYGrQxtLul50YV50rVcCiNJc0enX4qdkNRYe8j2g46+SIMHapXJw1GFdIWH2DfalQknZeTDWsRW2bqlBK3ORIz9AqJUapQAAAA=) format(\"woff\"),url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMlGRXgQAAAEoAAAAVmNtYXDiLxC2AAAB+AAAAUpnbHlm5X8X/gAAA4QAAA7kaGVhZAuHlGsAAADQAAAANmhoZWEOogcfAAAArAAAACRobXR40gAAAAAAAYAAAAB4bG9jYTDILUIAAANEAAAAPm1heHABLwB5AAABCAAAACBuYW1l1cf1oAAAEmgAAAIKcG9zdL2sAHoAABR0AAABeQABAAAHAAAAAKEHAAAAAAAHAAABAAAAAAAAAAAAAAAAAAAAHgABAAAAAQAAD+/W/l8PPPUACwcAAAAAANK0pLcAAAAA0rSktwAAAAAHAAcAAAAACAACAAAAAAAAAAEAAAAeAG0ABwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQcAAZAABQAIBHEE5gAAAPoEcQTmAAADXABXAc4AAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA8QHxHQcAAAAAoQcAAAAAAAABAAAAAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAAAAAAAwAAAAMAAAAcAAEAAAAAAEQAAwABAAAAHAAEACgAAAAGAAQAAQACAADxHf//AAAAAPEB//8AAA8AAAEAAAAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AUABmALIAxgDmAR4BSAF0AZwB8gIuAo4CugMKA44DsAPqBDgEfAS4BOgFDAWiBegGNgZsBtoHcgAAAAEAAAAABYsFiwACAAABEQECVQM2BYv76gILAAADAAAAAAZrBmsAAgAOABoAAAkCEwQAAxIABSQAEwIAASYAJzYANxYAFwYAAusBwP5Alf7D/loICAGmAT0BPQGmCAj+Wv7D/f6uBgYBUv39AVIGBv6uAjABUAFQAZsI/lr+w/7D/loICAGmAT0BPQGm+sgGAVL9/QFSBgb+rv39/q4AAAACAAAAAAVABYsAAwAHAAABIREpAREhEQHAASv+1QJVASsBdQQW++oEFgAAAAQAAAAABiAGIAAGABMAJAAnAAABLgEnFRc2NwYHFz4BNSYAJxUWEgEHASERIQERAQYHFT4BNxc3AQcXBNABZVW4A7sCJ3ElKAX+3+Wlzvu3XwFh/p8BKwF1AT5MXU6KO5lf/WCcnAOAZJ4rpbgYGGpbcUacVPQBYziaNP70Aetf/p/+QP6LAfb+wjsdmhJEMZhfBJacnAAAAQAAAAAEqwXWAAUAAAERIQERAQILASoBdv6KBGD+QP6LBKr+iwAAAAIAAAAABWYF1gAGAAwAAAEuAScRPgEBESEBEQEFZQFlVFRl/BEBKwF1/osDgGSeK/2mK54BRP5A/osEqv6LAAADAAAAAAYgBg8ABQAMABoAABMRIQERAQUuAScRPgEDFRYSFwYCBxU2ADcmAOABKwF1/osCxQFlVVVluqXOAwPOpeUBIQUF/t8EYP5A/osEqv6L4GSeK/2mK54C85o0/vS1tf70NJo4AWL19QFiAAAABAAAAAAFiwWLAAUACwARABcAAAEjESE1IwMzNTM1IQEjFSERIwMVMxUzEQILlgF24JaW4P6KA4DgAXaW4OCWAuv+ipYCCuCW/ICWAXYCoJbgAXYABAAAAAAFiwWLAAUACwARABcAAAEzFTMRIRMjFSERIwEzNTM1IRM1IxEhNQF14Jb+iuDgAXaWAcCW4P6KlpYBdgJV4AF2AcCWAXb76uCWAcDg/oqWAAAAAAIAAAAABdYF1gAPABMAAAEhDgEHER4BFyE+ATcRLgEDIREhBUD8gD9VAQFVPwOAP1UBAVU//IADgAXVAVU//IA/VQEBVT8DgD9V++wDgAAABgAAAAAGawZrAAcADAATABsAIAAoAAAJASYnDgEHASUuAScBBSEBNhI3JgUBBgIHFhchBR4BFwEzARYXPgE3AQK+AWROVIfwYQESA4416aH+7gLl/dABelxoAQH8E/7dXGgBAQ4CMP3kNemhARJ4/t1OVIfwYf7uA/ACaBIBAVhQ/id3pfY+/idL/XNkAQGTTU0B+GT+/5NNSEul9j4B2f4IEgEBWFAB2QAAAAUAAAAABmsF1gAPABMAFwAbAB8AAAEhDgEHER4BFyE+ATcRLgEBIRUhASE1IQUhNSE1ITUhBdX7VkBUAgJUQASqQFQCAlT7FgEq/tYC6v0WAuoBwP7WASr9FgLqBdUBVT/8gD9VAQFVPwOAP1X9rJX+1ZWVlZaVAAMAAAAABiAF1gAPACcAPwAAASEOAQcRHgEXIT4BNxEuAQEjNSMVMzUzFRQGByMuAScRPgE3Mx4BFQUjNSMVMzUzFQ4BByMuATURNDY3Mx4BFwWL++o/VAICVD8EFj9UAgJU/WtwlZVwKiDgICoBASog4CAqAgtwlZVwASog4CAqKiDgICoBBdUBVT/8gD9VAQFVPwOAP1X99yXgJUogKgEBKiABKiAqAQEqIEol4CVKICoBASogASogKgEBKiAAAAYAAAAABiAE9gADAAcACwAPABMAFwAAEzM1IxEzNSMRMzUjASE1IREhNSERFSE14JWVlZWVlQErBBX76wQV++sEFQM1lv5AlQHAlf5Alv5AlQJVlZUAAAABAAAAAAYgBmwALgAAASIGBwE2NCcBHgEzPgE3LgEnDgEHFBcBLgEjDgEHHgEXMjY3AQYHHgEXPgE3LgEFQCtKHv3sBwcCDx5OLF9/AgJ/X19/Agf98R5OLF9/AgJ/XyxOHgIUBQEDe1xcewMDewJPHxsBNxk2GQE0HSACf19ffwICf18bGf7NHCACf19ffwIgHP7KFxpcewICe1xdewAAAgAAAAAGWQZrAEMATwAAATY0Jzc+AScDLgEPASYvAS4BJyEOAQ8BBgcnJgYHAwYWHwEGFBcHDgEXEx4BPwEWHwEeARchPgE/ATY3FxY2NxM2JicFLgEnPgE3HgEXDgEFqwUFngoGB5YHGQ26OkQcAxQP/tYPFAIcRTm6DRoHlQcFC50FBZ0LBQeVBxoNujlFHAIUDwEqDxQCHEU5ug0aB5UHBQv9OG+UAgKUb2+UAgKUAzckSiR7CRoNAQMMCQVLLRzGDhEBAREOxhwtSwUJDP79DBsJeyRKJHsJGg3+/QwJBUstHMYOEQEBEQ7GHC1LBQkMAQMMGwlBApRvb5QCApRvb5QAAAAAAQAAAAAGawZrAAsAABMSAAUkABMCACUEAJUIAaYBPQE9AaYICP5a/sP+w/5aA4D+w/5aCAgBpgE9AT0BpggI/loAAAACAAAAAAZrBmsACwAXAAABBAADEgAFJAATAgABJgAnNgA3FgAXBgADgP7D/loICAGmAT0BPQGmCAj+Wv7D/f6uBgYBUv39AVIGBv6uBmsI/lr+w/7D/loICAGmAT0BPQGm+sgGAVL9/QFSBgb+rv39/q4AAAMAAAAABmsGawALABcAIwAAAQQAAxIABSQAEwIAASYAJzYANxYAFwYAAw4BBy4BJz4BNx4BA4D+w/5aCAgBpgE9AT0BpggI/lr+w/3+rgYGAVL9/QFSBgb+rh0Cf19ffwICf19ffwZrCP5a/sP+w/5aCAgBpgE9AT0BpvrIBgFS/f0BUgYG/q79/f6uAk9ffwICf19ffwICfwAAAAQAAAAABiAGIAAPABsAJQApAAABIQ4BBxEeARchPgE3ES4BASM1IxUjETMVMzU7ASEeARcRDgEHITczNSMFi/vqP1QCAlQ/BBY/VAICVP1rcJVwcJVwlgEqICoBASog/tZwlZUGIAJUP/vqP1QCAlQ/BBY/VPyClZUBwLu7ASog/tYgKgFw4AACAAAAAAZrBmsACwAXAAABBAADEgAFJAATAgATBwkBJwkBNwkBFwEDgP7D/loICAGmAT0BPQGmCAj+Wjhp/vT+9GkBC/71aQEMAQxp/vUGawj+Wv7D/sP+WggIAaYBPQE9Aab8EWkBC/71aQEMAQxp/vUBC2n+9AABAAAAAAXWBrYAFgAAAREJAREeARcOAQcuAScjFgAXNgA3JgADgP6LAXW+/QUF/b6+/QWVBgFR/v4BUQYG/q8FiwEq/ov+iwEqBP2/vv0FBf2+/v6vBgYBUf7+AVEAAAABAAAAAAU/BwAAFAAAAREjIgYdASEDIxEhESMRMzU0NjMyBT+dVjwBJSf+/s7//9Ctkwb0/vhISL3+2P0JAvcBKNq6zQAAAAAEAAAAAAaOBwAAMABFAGAAbAAAARQeAxUUBwYEIyImJyY1NDY3NiUuATU0NwYjIiY1NDY3PgEzIQcjHgEVFA4DJzI2NzY1NC4CIyIGBwYVFB4DEzI+AjU0LgEvASYvAiYjIg4DFRQeAgEzFSMVIzUjNTM1MwMfQFtaQDBI/uqfhOU5JVlKgwERIB8VLhaUy0g/TdNwAaKKg0pMMUVGMZImUBo1Ij9qQCpRGS8UKz1ZNjprWzcODxMeChwlThAgNWhvUzZGcX0Da9XVadTUaQPkJEVDUIBOWlN6c1NgPEdRii5SEipAKSQxBMGUUpo2QkBYP4xaSHNHO0A+IRs5ZjqGfVInITtlLmdnUjT8lxo0Xj4ZMCQYIwsXHTgCDiQ4XTtGazsdA2xs29ts2QADAAAAAAaABmwAAwAOACoAAAERIREBFgYrASImNDYyFgERIRE0JiMiBgcGFREhEhAvASEVIz4DMzIWAd3+tgFfAWdUAlJkZ6ZkBI/+t1FWP1UVC/63AgEBAUkCFCpHZz+r0ASP/CED3wEySWJik2Fh/N39yAISaXdFMx4z/dcBjwHwMDCQIDA4H+MAAAEAAAAABpQGAAAxAAABBgcWFRQCDgEEIyAnFjMyNy4BJxYzMjcuAT0BFhcuATU0NxYEFyY1NDYzMhc2NwYHNgaUQ18BTJvW/tKs/vHhIyvhsGmmHyEcKypwk0ROQk4seQFbxgi9hoxgbWAlaV0FaGJFDhyC/v3ut22RBIoCfWEFCxexdQQmAyyOU1hLlbMKJiSGvWYVOXM/CgAAAAEAAAAABYAHAAAiAAABFw4BBwYuAzURIzU+BDc+ATsBESEVIREUHgI3NgUwUBewWWitcE4hqEhyRDAUBQEHBPQBTf6yDSBDME4Bz+0jPgECOFx4eDoCINcaV11vVy0FB/5Y/P36HjQ1HgECAAEAAAAABoAGgABKAAABFAIEIyInNj8BHgEzMj4BNTQuASMiDgMVFBYXFj8BNjc2JyY1NDYzMhYVFAYjIiY3PgI1NCYjIgYVFBcDBhcmAjU0EiQgBBIGgM7+n9FvazsTNhRqPXm+aHfijmm2f1srUE0eCAgGAgYRM9Gpl6mJaz1KDgglFzYyPlYZYxEEzv7OAWEBogFhzgOA0f6fziBdR9MnOYnwlnLIfjpgfYZDaJ4gDCAfGAYXFD1al9mkg6ruVz0jdVkfMkJyVUkx/l5Ga1sBfOnRAWHOzv6fAAAHAAAAAAcABM8ADgAXACoAPQBQAFoAXQAAARE2HgIHDgEHBiYjJyY3FjY3NiYHERQFFjY3PgE3LgEnIwYfAR4BFw4BFxY2Nz4BNy4BJyMGHwEeARcUBhcWNjc+ATcuAScjBh8BHgEXDgEFMz8BFTMRIwYDJRUnAxyEzZRbCA2rgketCAEBqlRoCglxYwF+IiEOIysBAkswHQEECiQ0AgE+YyIhDiIsAQJLMB4BBQokNAE/YyIhDiIsAQJLMB4BBQokNAEBPvmD7kHhqs0s0gEnjgHJAv0FD2a9gIrADwUFAwPDAlVMZ3MF/pUHwgc1HTyWV325PgsJED+oY3G9TAc1HTyWV325PgsJED+oY3G9TAc1HTyWV325PgsJED+oY3G9UmQBZQMMR/61g/kBAAAAAAAQAMYAAQAAAAAAAQAHAAAAAQAAAAAAAgAHAAcAAQAAAAAAAwAHAA4AAQAAAAAABAAHABUAAQAAAAAABQALABwAAQAAAAAABgAHACcAAQAAAAAACgArAC4AAQAAAAAACwATAFkAAwABBAkAAQAOAGwAAwABBAkAAgAOAHoAAwABBAkAAwAOAIgAAwABBAkABAAOAJYAAwABBAkABQAWAKQAAwABBAkABgAOALoAAwABBAkACgBWAMgAAwABBAkACwAmAR5WaWRlb0pTUmVndWxhclZpZGVvSlNWaWRlb0pTVmVyc2lvbiAxLjBWaWRlb0pTR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AVgBpAGQAZQBvAEoAUwBSAGUAZwB1AGwAYQByAFYAaQBkAGUAbwBKAFMAVgBpAGQAZQBvAEoAUwBWAGUAcgBzAGkAbwBuACAAMQAuADAAVgBpAGQAZQBvAEoAUwBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4EcGxheQtwbGF5LWNpcmNsZQVwYXVzZQt2b2x1bWUtbXV0ZQp2b2x1bWUtbG93CnZvbHVtZS1taWQLdm9sdW1lLWhpZ2gQZnVsbHNjcmVlbi1lbnRlcg9mdWxsc2NyZWVuLWV4aXQGc3F1YXJlB3NwaW5uZXIJc3VidGl0bGVzCGNhcHRpb25zCGNoYXB0ZXJzBXNoYXJlA2NvZwZjaXJjbGUOY2lyY2xlLW91dGxpbmUTY2lyY2xlLWlubmVyLWNpcmNsZQJoZAZjYW5jZWwGcmVwbGF5CGZhY2Vib29rBWdwbHVzCGxpbmtlZGluB3R3aXR0ZXIGdHVtYmxyCXBpbnRlcmVzdBFhdWRpby1kZXNjcmlwdGlvbgAAAAAA) format(\"truetype\");font-weight:400;font-style:normal}.video-js .vjs-big-play-button:before,.video-js .vjs-play-control:before,.vjs-icon-play:before{content:'\\f101'}.vjs-icon-play-circle:before{content:'\\f102'}.video-js .vjs-play-control.vjs-playing:before,.vjs-icon-pause:before{content:'\\f103'}.video-js .vjs-mute-control.vjs-vol-0:before,.video-js .vjs-volume-menu-button.vjs-vol-0:before,.vjs-icon-volume-mute:before{content:'\\f104'}.video-js .vjs-mute-control.vjs-vol-1:before,.video-js .vjs-volume-menu-button.vjs-vol-1:before,.vjs-icon-volume-low:before{content:'\\f105'}.video-js .vjs-mute-control.vjs-vol-2:before,.video-js .vjs-volume-menu-button.vjs-vol-2:before,.vjs-icon-volume-mid:before{content:'\\f106'}.video-js .vjs-mute-control:before,.video-js .vjs-volume-menu-button:before,.vjs-icon-volume-high:before{content:'\\f107'}.video-js .vjs-fullscreen-control:before,.vjs-icon-fullscreen-enter:before{content:'\\f108'}.video-js.vjs-fullscreen .vjs-fullscreen-control:before,.vjs-icon-fullscreen-exit:before{content:'\\f109'}.vjs-icon-square:before{content:'\\f10a'}.vjs-icon-spinner:before{content:'\\f10b'}.video-js .vjs-subtitles-button:before,.vjs-icon-subtitles:before{content:'\\f10c'}.video-js .vjs-captions-button:before,.vjs-icon-captions:before{content:'\\f10d'}.video-js .vjs-chapters-button:before,.vjs-icon-chapters:before{content:'\\f10e'}.vjs-icon-share{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-share:before{content:'\\f10f'}.vjs-icon-cog:before{content:'\\f110'}.video-js .vjs-mouse-display:before,.video-js .vjs-play-progress:before,.video-js .vjs-volume-level:before,.vjs-icon-circle:before{content:'\\f111'}.vjs-icon-circle-outline:before{content:'\\f112'}.vjs-icon-circle-inner-circle:before{content:'\\f113'}.vjs-icon-hd:before{content:'\\f114'}.video-js .vjs-control.vjs-close-button:before,.vjs-icon-cancel:before{content:'\\f115'}.vjs-icon-replay:before{content:'\\f116'}.vjs-icon-facebook:before{content:'\\f117'}.vjs-icon-gplus:before{content:'\\f118'}.vjs-icon-linkedin:before{content:'\\f119'}.vjs-icon-twitter:before{content:'\\f11a'}.vjs-icon-tumblr:before{content:'\\f11b'}.vjs-icon-pinterest:before{content:'\\f11c'}.vjs-icon-audio-description:before{content:'\\f11d'}.video-js{display:block;vertical-align:top;box-sizing:border-box;position:relative;padding:0;font-size:10px;line-height:1;font-weight:400;font-style:normal;font-family:Arial,Helvetica,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.video-js:-moz-full-screen{position:absolute}.video-js:-webkit-full-screen{width:100%!important;height:100%!important}.video-js .vjs-tech,.video-js.vjs-fill{width:100%;height:100%}.video-js *,.video-js :after,.video-js :before{box-sizing:inherit}.video-js ul{font-family:inherit;font-size:inherit;line-height:inherit;list-style-position:outside;margin:0}.video-js.vjs-16-9,.video-js.vjs-4-3,.video-js.vjs-fluid{width:100%;max-width:100%;height:0}.video-js.vjs-16-9{padding-top:56.25%}.video-js.vjs-4-3{padding-top:75%}.video-js .vjs-tech{position:absolute;top:0;left:0}body.vjs-full-window{padding:0;margin:0;height:100%;overflow-y:auto}.vjs-full-window .video-js.vjs-fullscreen{position:fixed;overflow:hidden;z-index:1000;left:0;top:0;bottom:0;right:0}.video-js.vjs-fullscreen{width:100%!important;height:100%!important;padding-top:0!important}.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}.vjs-hidden{display:none!important}.video-js .vjs-offscreen{height:1px;left:-9999px;position:absolute;top:0;width:1px}.vjs-lock-showing{display:block!important;opacity:1;visibility:visible}.vjs-no-js{padding:20px;font-size:18px;font-family:Arial,Helvetica,sans-serif;width:300px;height:150px;margin:0 auto}.vjs-no-js a,.vjs-no-js a:visited{color:#66A8CC}.video-js .vjs-big-play-button{font-size:3em;line-height:1.5em;height:1.5em;width:3em;display:block;position:absolute;top:10px;left:10px;padding:0;cursor:pointer;opacity:1;border:.06666em solid #fff;background-color:#2B333F;background-color:rgba(43,51,63,.7);-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;-webkit-transition:all .4s;-moz-transition:all .4s;-o-transition:all .4s;transition:all .4s}.vjs-big-play-centered .vjs-big-play-button{top:50%;left:50%;margin-top:-.75em;margin-left:-1.5em}.video-js .vjs-big-play-button:focus,.video-js:hover .vjs-big-play-button{outline:0;border-color:#fff;background-color:#73859f;background-color:rgba(115,133,159,.5);-webkit-transition:all 0s;-moz-transition:all 0s;-o-transition:all 0s;transition:all 0s}.vjs-controls-disabled .vjs-big-play-button,.vjs-error .vjs-big-play-button,.vjs-has-started .vjs-big-play-button,.vjs-using-native-controls .vjs-big-play-button{display:none}.video-js button{background:0 0;border:none;color:inherit;display:inline-block;overflow:visible;font-size:inherit;line-height:inherit;text-transform:none;text-decoration:none;transition:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.video-js .vjs-control.vjs-close-button{cursor:pointer;height:3em;position:absolute;right:0;top:.5em;z-index:2}.vjs-menu-button{cursor:pointer}.vjs-menu .vjs-menu-content{display:block;padding:0;margin:0;overflow:auto}.vjs-scrubbing .vjs-menu-button:hover .vjs-menu{display:none}.vjs-menu li{list-style:none;margin:0;padding:.2em 0;line-height:1.4em;font-size:1.2em;text-transform:lowercase}.vjs-menu li:focus,.vjs-menu li:hover{outline:0;background-color:#73859f;background-color:rgba(115,133,159,.5)}.vjs-menu li.vjs-selected,.vjs-menu li.vjs-selected:focus,.vjs-menu li.vjs-selected:hover{background-color:#fff;color:#2B333F}.vjs-menu li.vjs-menu-title{text-align:center;text-transform:uppercase;font-size:1em;line-height:2em;padding:0;margin:0 0 .3em;font-weight:700;cursor:default}.vjs-menu-button-popup .vjs-menu{display:none;position:absolute;bottom:0;width:10em;left:-3em;height:0;margin-bottom:1.5em;border-top-color:rgba(43,51,63,.7)}.vjs-menu-button-popup .vjs-menu .vjs-menu-content{background-color:#2B333F;background-color:rgba(43,51,63,.7);position:absolute;width:100%;bottom:1.5em;max-height:15em}.vjs-menu-button-popup .vjs-menu.vjs-lock-showing,.vjs-workinghover .vjs-menu-button-popup:hover .vjs-menu{display:block}.video-js .vjs-menu-button-inline{-webkit-transition:all .4s;-moz-transition:all .4s;-o-transition:all .4s;transition:all .4s;overflow:hidden}.video-js .vjs-menu-button-inline:before{width:2.222222222em}.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline{width:12em}.video-js .vjs-menu-button-inline.vjs-slider-active{-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}.vjs-menu-button-inline .vjs-menu{opacity:0;height:100%;width:auto;position:absolute;left:4em;top:0;padding:0;margin:0;-webkit-transition:all .4s;-moz-transition:all .4s;-o-transition:all .4s;transition:all .4s}.vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-menu-button-inline:focus .vjs-menu,.vjs-menu-button-inline:hover .vjs-menu{display:block;opacity:1}.vjs-no-flex .vjs-menu-button-inline .vjs-menu{display:block;opacity:1;position:relative;width:auto}.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu{width:auto}.vjs-menu-button-inline .vjs-menu-content{width:auto;height:100%;margin:0;overflow:hidden}.video-js .vjs-control-bar{display:none;width:100%;position:absolute;bottom:0;left:0;right:0;height:3em;background-color:#2B333F;background-color:rgba(43,51,63,.7)}.vjs-has-started .vjs-control-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;visibility:visible;opacity:1;-webkit-transition:visibility .1s,opacity .1s;-moz-transition:visibility .1s,opacity .1s;-o-transition:visibility .1s,opacity .1s;transition:visibility .1s,opacity .1s}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.vjs-controls-disabled .vjs-control-bar,.vjs-error .vjs-control-bar,.vjs-using-native-controls .vjs-control-bar{display:none!important}.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}@media \\0screen{.vjs-user-inactive.vjs-playing .vjs-control-bar :before{content:\"\"}}.vjs-has-started.vjs-no-flex .vjs-control-bar{display:table}.video-js .vjs-control{outline:0;position:relative;margin:0;padding:0;height:100%;width:4em;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}.video-js .vjs-control:before{font-size:1.8em;line-height:1.67}.video-js .vjs-control:focus,.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before{text-shadow:0 0 1em #fff}.video-js .vjs-control-text{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.vjs-no-flex .vjs-control{display:table-cell;vertical-align:middle}.video-js .vjs-custom-control-spacer{display:none}.video-js .vjs-progress-control{-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-width:4em}.vjs-live .vjs-progress-control{display:none}.video-js .vjs-progress-holder{-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s;height:.3em}.video-js .vjs-progress-control:hover .vjs-progress-holder{font-size:1.666666666666666666em}.video-js .vjs-progress-control:hover .vjs-mouse-display:after,.video-js .vjs-progress-control:hover .vjs-play-progress:after{display:block;font-size:.6em}.video-js .vjs-progress-holder .vjs-load-progress,.video-js .vjs-progress-holder .vjs-load-progress div,.video-js .vjs-progress-holder .vjs-play-progress{position:absolute;display:block;height:.3em;margin:0;padding:0;width:0;left:0;top:0}.video-js .vjs-mouse-display:before{display:none}.video-js .vjs-play-progress{background-color:#fff}.video-js .vjs-play-progress:before{position:absolute;top:-.333333333333333em;right:-.5em;font-size:.9em}.video-js .vjs-mouse-display:after,.video-js .vjs-play-progress:after{display:none;position:absolute;top:-3.4em;right:-1.5em;font-size:.9em;color:#000;content:attr(data-current-time);padding:6px 8px 8px;background-color:#fff;background-color:rgba(255,255,255,.8);-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.video-js .vjs-play-progress:after,.video-js .vjs-play-progress:before{z-index:1}.video-js .vjs-load-progress{background:#bfc7d3;background:rgba(115,133,159,.5)}.video-js .vjs-load-progress div{background:#fff;background:rgba(115,133,159,.75)}.video-js.vjs-no-flex .vjs-progress-control{width:auto}.video-js .vjs-progress-control .vjs-mouse-display{display:none;position:absolute;width:1px;height:100%;background-color:#000;z-index:1}.vjs-no-flex .vjs-progress-control .vjs-mouse-display{z-index:0}.video-js .vjs-progress-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display,.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display:after{visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display,.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display:after{display:none}.video-js .vjs-progress-control .vjs-mouse-display:after{color:#fff;background-color:#000;background-color:rgba(0,0,0,.8)}.video-js .vjs-slider{outline:0;position:relative;cursor:pointer;padding:0;margin:0 .45em;background-color:#73859f;background-color:rgba(115,133,159,.5)}.video-js .vjs-slider:focus{text-shadow:0 0 1em #fff;-webkit-box-shadow:0 0 1em #fff;-moz-box-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}.video-js .vjs-mute-control,.video-js .vjs-volume-menu-button{cursor:pointer;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}.video-js .vjs-volume-control{width:5em;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.video-js .vjs-volume-bar{margin:1.35em .45em}.vjs-volume-bar.vjs-slider-horizontal{width:5em;height:.3em}.vjs-volume-bar.vjs-slider-vertical{width:.3em;height:5em;margin:1.35em auto}.video-js .vjs-volume-level{position:absolute;bottom:0;left:0;background-color:#fff}.video-js .vjs-volume-level:before{position:absolute;font-size:.9em}.vjs-slider-vertical .vjs-volume-level{width:.3em}.vjs-slider-vertical .vjs-volume-level:before{top:-.5em;left:-.3em}.vjs-slider-horizontal .vjs-volume-level{height:.3em}.vjs-slider-horizontal .vjs-volume-level:before{top:-.3em;right:-.5em}.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level{height:100%}.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level{width:100%}.vjs-menu-button-popup.vjs-volume-menu-button .vjs-menu{display:block;width:0;height:0;border-top-color:transparent}.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu{left:.5em;height:8em}.vjs-menu-button-popup.vjs-volume-menu-button-horizontal .vjs-menu{left:-2em}.vjs-menu-button-popup.vjs-volume-menu-button .vjs-menu-content{height:0;width:0;overflow-x:hidden;overflow-y:hidden}.vjs-volume-menu-button-vertical .vjs-lock-showing .vjs-menu-content,.vjs-volume-menu-button-vertical.vjs-slider-active .vjs-menu-content,.vjs-volume-menu-button-vertical:focus .vjs-menu-content,.vjs-volume-menu-button-vertical:hover .vjs-menu-content{height:8em;width:2.9em}.vjs-volume-menu-button-horizontal .vjs-lock-showing .vjs-menu-content,.vjs-volume-menu-button-horizontal .vjs-slider-active .vjs-menu-content,.vjs-volume-menu-button-horizontal:focus .vjs-menu-content,.vjs-volume-menu-button-horizontal:hover .vjs-menu-content{height:2.9em;width:8em}.vjs-volume-menu-button.vjs-menu-button-inline .vjs-menu-content{background-color:transparent!important}.vjs-poster{display:inline-block;vertical-align:middle;background-repeat:no-repeat;background-position:50% 50%;background-size:contain;cursor:pointer;margin:0;padding:0;position:absolute;top:0;right:0;bottom:0;left:0;height:100%}.vjs-poster img{display:block;vertical-align:middle;margin:0 auto;max-height:100%;padding:0;width:100%}.vjs-has-started .vjs-poster{display:none}.vjs-audio.vjs-has-started .vjs-poster{display:block}.vjs-controls-disabled .vjs-poster,.vjs-using-native-controls .vjs-poster{display:none}.video-js .vjs-live-control{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:flex-start;-webkit-align-items:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto;font-size:1em;line-height:3em}.vjs-no-flex .vjs-live-control{display:table-cell;width:auto;text-align:left}.video-js .vjs-current-time,.video-js .vjs-duration,.vjs-live .vjs-time-control,.vjs-live .vjs-time-divider,.vjs-no-flex .vjs-current-time,.vjs-no-flex .vjs-duration{display:none}.video-js .vjs-time-control{-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none;font-size:1em;line-height:3em;min-width:2em;width:auto;padding-left:1em;padding-right:1em}.vjs-time-divider{display:none;line-height:3em}.video-js .vjs-play-control{cursor:pointer;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}.vjs-text-track-display{position:absolute;bottom:3em;left:0;right:0;top:0;pointer-events:none}.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display{bottom:1em}.video-js .vjs-text-track{font-size:1.4em;text-align:center;margin-bottom:.1em;background-color:#000;background-color:rgba(0,0,0,.5)}.vjs-subtitles{color:#fff}.vjs-captions{color:#fc6}.vjs-tt-cue{display:block}video::-webkit-media-text-track-display{-moz-transform:translateY(-3em);-ms-transform:translateY(-3em);-o-transform:translateY(-3em);-webkit-transform:translateY(-3em);transform:translateY(-3em)}.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display{-moz-transform:translateY(-1.5em);-ms-transform:translateY(-1.5em);-o-transform:translateY(-1.5em);-webkit-transform:translateY(-1.5em);transform:translateY(-1.5em)}.video-js .vjs-fullscreen-control{cursor:pointer;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}.vjs-playback-rate .vjs-playback-rate-value{font-size:1.5em;line-height:2;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center}.vjs-playback-rate .vjs-menu{width:4em;left:0}.vjs-error .vjs-error-display .vjs-modal-dialog-content{font-size:1.4em;text-align:center}.vjs-error .vjs-error-display:before{color:#fff;content:'X';font-family:Arial,Helvetica,sans-serif;font-size:4em;left:0;line-height:1;margin-top:-.5em;position:absolute;text-shadow:.05em .05em .1em #000;text-align:center;top:50%;vertical-align:middle;width:100%}.vjs-loading-spinner{display:none;position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;opacity:.85;text-align:left;border:6px solid rgba(43,51,63,.7);box-sizing:border-box;background-clip:padding-box;width:50px;height:50px;border-radius:25px}.vjs-seeking .vjs-loading-spinner,.vjs-waiting .vjs-loading-spinner{display:block}.vjs-loading-spinner:after,.vjs-loading-spinner:before{content:\"\";position:absolute;margin:-6px;box-sizing:inherit;width:inherit;height:inherit;border-radius:inherit;opacity:1;border:inherit;border-color:#fff transparent transparent}.vjs-seeking .vjs-loading-spinner:after,.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:before{-webkit-animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite;animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite}.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:before{border-top-color:#fff}.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:after{border-top-color:#fff;-webkit-animation-delay:.44s;animation-delay:.44s}@keyframes vjs-spinner-spin{100%{transform:rotate(360deg)}}@-webkit-keyframes vjs-spinner-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes vjs-spinner-fade{0%,100%,20%,60%{border-top-color:#73859f}35%{border-top-color:#fff}}@-webkit-keyframes vjs-spinner-fade{0%,100%,20%,60%{border-top-color:#73859f}35%{border-top-color:#fff}}.vjs-chapters-button .vjs-menu ul{width:24em}.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-custom-control-spacer{-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto}.video-js.vjs-layout-tiny:not(.vjs-fullscreen).vjs-no-flex .vjs-custom-control-spacer{width:auto}.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-subtitles-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-progress-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subtitles-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-menu-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subtitles-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-menu-button{display:none}.vjs-caption-settings{position:relative;top:1em;background-color:#2B333F;background-color:rgba(43,51,63,.75);color:#fff;margin:0 auto;padding:.5em;height:15em;font-size:12px;width:40em}.vjs-caption-settings .vjs-tracksettings{top:0;bottom:2em;left:0;right:0;position:absolute;overflow:auto}.vjs-caption-settings .vjs-tracksettings-colors,.vjs-caption-settings .vjs-tracksettings-font{float:left}.vjs-caption-settings .vjs-tracksettings-colors:after,.vjs-caption-settings .vjs-tracksettings-controls:after,.vjs-caption-settings .vjs-tracksettings-font:after{clear:both}.vjs-caption-settings .vjs-tracksettings-controls{position:absolute;bottom:1em;right:1em}.vjs-caption-settings .vjs-tracksetting{margin:5px;padding:3px;min-height:40px}.vjs-caption-settings .vjs-tracksetting label{display:block;width:100px;margin-bottom:5px}.vjs-caption-settings .vjs-tracksetting span{display:inline;margin-left:5px}.vjs-caption-settings .vjs-tracksetting>div{margin-bottom:5px;min-height:20px}.vjs-caption-settings .vjs-tracksetting>div:last-child{margin-bottom:0;padding-bottom:0;min-height:0}.vjs-caption-settings label>input{margin-right:10px}.vjs-caption-settings input[type=button]{width:40px;height:40px}.video-js .vjs-modal-dialog{background:rgba(0,0,0,.8);background:-webkit-linear-gradient(-90deg,rgba(0,0,0,.8),rgba(255,255,255,0));background:linear-gradient(180deg,rgba(0,0,0,.8),rgba(255,255,255,0))}.vjs-modal-dialog .vjs-modal-dialog-content{font-size:1.2em;line-height:1.5;padding:20px 24px;z-index:1}"),
function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (n) {
        o.innerText = e
    }
}(document, ".vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar{background-color:#000;background-color:rgba(0,0,0,.7);bottom:0;height:51px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control{top:-5px;background-color:#000;background-color:rgba(0,0,0,.7)}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control:hover{top:-7px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control .vjs-progress-holder{margin:0}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-load-progress,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-play-progress{border-radius:0;-moz-border-radius:0;-webkit-border-radius:0}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-duration{margin-top:12px}@media (max-width:768px){.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar{height:42px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control{background-color:#000}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-duration{margin-top:11px}}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-current-time{margin-left:20px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-duration{margin-right:20px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{padding-top:22px}@media (max-width:512px){.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar{height:34px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-play-control:before{font-size:11px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-duration{margin-top:9px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-current-time{margin-left:14px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-duration{margin-right:10px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{padding-top:14pxpx}}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control:before{margin-top:5px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar{right:20px;top:16px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button{background-color:#000;background-color:rgba(0,0,0,.7);width:32px;height:32px;border-radius:50px;-moz-border-radius:50px;-webkit-border-radius:50px;margin-left:7px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button:before{margin-top:-1px;font-size:15px;line-height:16px}@media (max-width:768px){.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar{top:14px;right:16px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button{width:28px;height:28px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button:before{font-size:14px;line-height:15px;margin-top:-2px}}@media (max-width:512px){.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button{width:24px;height:24px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button:before{font-size:12px;line-height:13px;margin-top:0}}.vjs-afterglow-skin.afterglow-skin-dark.vjs-youtube.vjs-has-started.vjs-paused .vjs-control-bar{right:0;background-color:#000}"),
function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (n) {
        o.innerText = e
    }
}(document, '@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300);.vjs-afterglow-skin.vjs-has-started .vjs-control-bar,.vjs-afterglow-skin.vjs-has-started .vjs-top-control-bar{-webkit-transition:visibility .1s,opacity .1s;-moz-transition:visibility .1s,opacity .1s;-o-transition:visibility .1s,opacity .1s}@font-face{font-family:afterglow-icon;src:url(data:font/truetype;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SA4cAAAC8AAAAYGNtYXAAeLLHAAABHAAAAGRnYXNwAAAAEAAAAYAAAAAIZ2x5ZjvMn/0AAAGIAAAKMGhlYWQKacTfAAALuAAAADZoaGVhCtQG7wAAC/AAAAAkaG10eESZANEAAAwUAAAASGxvY2EUPhEmAAAMXAAAACZtYXhwABgAggAADIQAAAAgbmFtZc07FAkAAAykAAABknBvc3QAAwAAAAAOOAAAACAAAwROAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADmDwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQASAAAAA4ACAACAAYAAQAg5gvmDeYP//3//wAAAAAAIOYA5g3mD//9//8AAf/jGgQaAxoCAAMAAQAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAwAA/8AF4gPAABAAQABzAAATERQWMyEyNjURNCYjISIGFQUOARUUFjMyNjcVFAYHMAYjIiYnLgE1NDY3PgE3PgEzMhYxHgEPAS4BJy4BIyIGByEOARUUFjMyNjEVFAYHMAYjIiYnLgE1NDY3PgE3PgEzMhYxHgEHMAY3BzAmJy4BIyIGBwBHMgTwM0ZHMvsQM0YBihcYWlklWzUiGFM2TnYpKSoVFBQ6JiVZMzRjGBQJGxQoFBQoEytCFwJmFxdZWSWQIhhTNk52KSkpFBQUOiYmWDM0YxgVBwMDHjwUFCgTKkIYA0j88DJGRzEDEDJGRzHiH1k5dnYTEkEZLAYVLi8vhlc3YSkqPxYWFh8HLBdCCREHBwcgIB9ZOXZ2JUEZLAYVLi8vhlc3YSkqPxYWFh8HKhEHB0oaBwcHICAAAAACABr/2gPmA6YAEAAhAAATNzYyFwEWFA8BBiInASY0NyUXFhQHAQYiLwEmNDcBNjIXGisRLxEDUBAQLBAvEfywEREDoCwQEPywES8RKxERA1ARLxADeiwQEPywES8QLBAQA1ARLxAsLBAvEfywEBAsEC8RA1AQEAABAA3/7gJ6A5IADAAAFwYmNRE0NhcBFhQHAXctPT0tAgMtLf39EiAfNgM6Nh8g/n0gXiD+fQAAAAIAAP/zA48DlwAcAD0AABM0NjMwIjMyPgIxNhYVERQGJzAuAisBIiY9AQUHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQfAQA3KliWS3pYMAsODgs5XXg/OSo8ArhHEBAPKQ9ISA8pDxAQR0cQEA8pD0hIDykPEBBHAhwqPVZoVhMFE/xmEwUTV2dXPCquXEgPKQ8QEEdHEBAPKQ9ISA8pDxAQR0cQEA8pD0gAAQAA/8AEAAPAADAAABM0PgIzMh4CFRQOAiMqAScmNjcyFjMyPgI1NC4CIyIOAhUcARcOAScmNDUAUIu7amq7i1BQi7tqBw4HJQEpBgsGWp52RUV2nlpannZFAQFGBgEBwGq7i1BQi7tqaruLUAEGRgEBRXaeWlqedkVFdp5aBQkFJQklBw4HAAUAAP/zA6kDlwASACcAPQBTAHAAAAE0JjEmNDc2FhcwFhcUFhUuASMzMCIjFAYxBhQXFjY3MD4CJyoBMTM0JjEmND8BNjIXMB4CFxQWFSoBIzMwIiMUBjEGFB8BFjI3MD4CJyoBMSU0NjMwIjMyPgIxNhYVERQGJzAuAisBIiY9AQKpKQwMDBwLNwwFHyATFBEIKQwMCxsIFhoUAQwjny4ICAoIGgcSFxYEBRsfExUSCC4ICAoIGQgYHBYCECP8jzcqWJZLelgwCw4OCzldeD85KjwBwEVKFDATFAYTfEEMEgsEAUVPFDAUEwQPMEdSI1hrEzYTDxMTL0lZKgscDFhrEzYTFBMTP11rLFwqPVZoVhMFE/xmEwUTV2dXPCquAAEAAP/zAgUDlwAcAAATNDYzMCIzMj4CMTYWFREUBicwLgIrASImPQEANypYlkt6WDALDg4LOV14PzkqPAIcKj1WaFYTBRP8ZhMFE1dnVzwqrgAAAAMAAP/zAvsDlwASACcARAAAATQmMSY0NzYWFzAWFxQWFS4BIzMwIiMUBjEGFBcWNjcwPgInKgExJTQ2MzAiMzI+AjE2FhURFAYnMC4CKwEiJj0BAqkpDAwMHAs3DAUfIBMUEQgpDAwLGwgWGhQBDCP9QzcqWJZLelgwCw4OCzldeD85KjwBwEVKFDATFAYTfEEMEgsEAUVPFDAUEwQPMEdSI1wqPVZoVhMFE/xmEwUTV2dXPCquAAAEAC3/wQQTA6cACgAXACIALwAAARcWMj8BJwcGFBclDgEvASY2PwE2Fg8BARYUDwEnNz4BHwEFPgEfARYGDwEGJj8BAlAwDikOrHWsDg4BpAYwHdUdECjaJzEGH/38Dg6sdawOKQ4w/lwGMB3VHRAo2igwBh8CFDAODqx1rA4pDmcoDxzVHTAGHwYxJ9r+2Q4pDqx1rA4BDzBnKA8c1R0wBh8GMSfaAAAEAC//6APZA5IACgAXACIALwAANxcWMj8BJwcGFBclDgEvASY2PwE2Fg8BARYUDwEnNzYyHwEFPgEfARYGDwEGJj8BLywNJQ3Ka8oNDQGsBSwawxoPJMckLAUdAf4NDcpqyQ0lDSz+VAUtGsIaDiTHJCwFHBQsDQ3Ka8oNJQ2LJA8awxosBR0FLCTHAscNJA7JasoNDSyKJA4awhotBRwFLCTHAAIAEv/AAxoDwAAQACEAABMzMhYVERQGKwEiJjURNDYzITMyFhURFAYrASImNRE0NjNYah0qKh1qHSkpHQISah0pKR1qHSoqHQPAKR78jh4pKR4Dch4pKR78jh4pKR4Dch4pAAADAB7/3AcSA6QAMABOAF0AACUUBisBIiY1ETQmIyEiBhURFAYrASImNRE0NjsBMhYVERQWMyEyNjURNDY7ATIWFRElDgMrASImNRE0NjsBMh4CFx4DFRQOAgcDNC4CKwERMzI+AjUxAzchGFsXIiEX/vIYISEYWxciIRhbGCEhGAEOFyEhGFsXIgNTIlNicUDZGCEiF/c7aVxPICExIRARIjMiTSJFZ0VtWEpvSiUVFyIiGAEvFyIiF/7RGCIiFwNWFyIiF/72FyEhFwEKFyIiF/yqRh8wIBAiFwNWFyIQHy8fIEtXZDg7altOIAFpTnVOJ/2KKE93UAAAAAADAAD/wAXiA8AAEAAfAC4AABMRFBYzITI2NRE0JiMhIgYVATQ2MyEyFhUUBiMhIiY1JzQ2MyEyFhUUBiMhIiY1AEcyBPAzRkcy+xAzRgEtJBkDDhkkJBn88hkkeCMZBAAZIyMZ/AAZIwNI/PAyRkcxAxAyRkcx/WkZIyMZGSMjGbUZIyMZGSQkGQAAAAMAHv/cBmgDpAAdACsAfwAAJQ4DKwEiJjURNDY7ATIeAhceAxUUDgIHAzQuAisBETMyPgI1AQ4BIyImJzU0NhcwFhceATMyNjc+ATU0JicuAScuAScuAScuAScuATU0Njc+ATMyFhceATEHLgEnLgEjIgYHDgEVFBYXHgEXHgEXHgEXHgEVFAYHBeAiU2JyQNkYISIX9ztpXE8hIDIgEREiMyJNI0VnRW1YSnBKJfycL4RVTn88HxZFIiI/HCI0EhITCAgIGA8QPzAsQxcWJA0NDiwsLHlNJkkiI25DJ0EZGjIYHi0PEBAHBgYUDg5CM0VdGhkZLzBbHzAgECIXA1YXIhAfLx8gS1dkODtqW04gAWlOdU4n/YooT3dQ/mEkJRYdgBgVCBkJCAkMDQwmGQ0ZCwsUCgogFhQnExMrGRg6Ij5iJCQjCAkJKJsPFgYGBg0NDSMVDRcKChMJCSEYH0AfIE4uP2UlAAEAAAABAAAwsT5nXw889QALBAAAAAAA0hxAMQAAAADSHEAxAAD/wAcSA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABxwAAAAABxIAAQAAAAAAAAAAAAAAAAAAABIEAAAAAAAAAAAAAAACAAAABeIAAAQAABoCtgANA80AAAQAAAADzQAAA80AAAPNAAAEMQAtBAAALwMsABIHHAAeBeIAAAZyAB4AAAAAAAoAFAAeAL4A+gEWAW4BsgJCAmwCyAMcA24DoAQeBGQFGAAAAAEAAAASAIAABQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAIAAAAAQAAAAAAAgAHAGkAAQAAAAAAAwAIADkAAQAAAAAABAAIAH4AAQAAAAAABQALABgAAQAAAAAABgAIAFEAAQAAAAAACgAaAJYAAwABBAkAAQAQAAgAAwABBAkAAgAOAHAAAwABBAkAAwAQAEEAAwABBAkABAAQAIYAAwABBAkABQAWACMAAwABBAkABgAQAFkAAwABBAkACgA0ALBjYy1pY29ucwBjAGMALQBpAGMAbwBuAHNWZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBjYy1pY29ucwBjAGMALQBpAGMAbwBuAHNjYy1pY29ucwBjAGMALQBpAGMAbwBuAHNSZWd1bGFyAFIAZQBnAHUAbABhAHJjYy1pY29ucwBjAGMALQBpAGMAbwBuAHNGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format(\'truetype\');font-weight:400;font-style:normal}.vjs-afterglow-skin{overflow:hidden;color:#fff}.vjs-afterglow-skin :focus,.vjs-afterglow-skin:focus{outline:0}.vjs-afterglow-skin video{background-color:#000}.vjs-afterglow-skin .vjs-slider{outline:0;position:relative;cursor:pointer;padding:0;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;margin:0 30px;background-color:#fff;background-color:rgba(255,255,255,.1)}@media (max-width:768px){.vjs-afterglow-skin .vjs-slider{margin:0 20px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-slider{margin:0 12px}}.vjs-afterglow-skin .vjs-slider:hover{margin:0 30px}@media (max-width:768px){.vjs-afterglow-skin .vjs-slider:hover{margin:0 20px}}.vjs-afterglow-skin .vjs-slider:focus{-webkit-box-shadow:0 0 2em #fff;-moz-box-shadow:0 0 2em #fff;box-shadow:0 0 2em #fff}.vjs-afterglow-skin .vjs-slider-handle{position:absolute;left:0;top:0;display:none}.vjs-afterglow-skin .vjs-play-progress:before{display:none!important;height:0;width:0;font-size:.9em}.vjs-afterglow-skin .vjs-progress-control .vjs-mouse-display,.vjs-afterglow-skin .vjs-progress-control:hover .vjs-mouse-display,.vjs-afterglow-skin .vjs-progress-control:hover .vjs-play-progress:after{display:none}.vjs-afterglow-skin .vjs-control-bar{display:none;position:absolute;bottom:16px;left:0;right:0;height:33px;font-family:\'Open Sans\';color:rgba(255,255,255,.9);background-color:#000;background-color:rgba(0,0,0,0)}@media (max-width:768px){.vjs-afterglow-skin .vjs-control-bar{bottom:7px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-slider:hover{margin:0 12px}.vjs-afterglow-skin .vjs-control-bar{bottom:0}}.vjs-afterglow-skin .vjs-control-bar .div{opacity:.9}.vjs-afterglow-skin .vjs-control-bar .div:hover{opacity:1}.vjs-afterglow-skin.vjs-has-started .vjs-control-bar{display:block;visibility:visible;opacity:1;transition:visibility .1s,opacity .1s}.vjs-afterglow-skin.vjs-has-started.vjs-ended .vjs-control-bar,.vjs-afterglow-skin.vjs-has-started.vjs-ended .vjs-top-control-bar{display:block;visibility:hidden;opacity:0}.vjs-afterglow-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{display:block;visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.vjs-afterglow-skin.vjs-controls-disabled .vjs-control-bar,.vjs-afterglow-skin.vjs-error .vjs-control-bar,.vjs-afterglow-skin.vjs-error .vjs-top-control-bar,.vjs-afterglow-skin.vjs-using-native-controls .vjs-control-bar{display:none}.vjs-afterglow-skin.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}@media \\0screen{.vjs-afterglow-skin.vjs-user-inactive.vjs-playing .vjs-control-bar :before{content:""}}.vjs-afterglow-skin .vjs-control{outline:0;position:relative;float:left;text-align:center;margin:0;padding:0;height:40px;width:auto}.vjs-afterglow-skin .vjs-control.vjs-captions-button.vjs-control,.vjs-afterglow-skin .vjs-control.vjs-subtitles-button.vjs-control{width:40px}@media (max-width:768px){.vjs-afterglow-skin .vjs-control{height:30px}.vjs-afterglow-skin .vjs-control.vjs-captions-button.vjs-control,.vjs-afterglow-skin .vjs-control.vjs-subtitles-button.vjs-control{width:30px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-control.vjs-captions-button.vjs-control,.vjs-afterglow-skin .vjs-control.vjs-subtitles-button.vjs-control{width:20px}}.vjs-afterglow-skin .vjs-control:before{font-family:afterglow-icon;font-size:17px;line-height:18px;padding-top:10px;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;opacity:.9;text-shadow:0 0 0 rgba(255,255,255,0)}@media (max-width:768px){.vjs-afterglow-skin .vjs-control:before{font-size:13px;line-height:13px;padding-top:9px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-control:before{font-size:11px;line-height:11px;padding-top:6px}}.vjs-afterglow-skin .vjs-control:focus:before,.vjs-afterglow-skin .vjs-control:hover:before{text-shadow:0 0 5px rgba(255,255,255,.6);opacity:1}.vjs-afterglow-skin .vjs-control-text{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.vjs-afterglow-skin .vjs-play-control{width:50px;cursor:pointer;position:absolute;left:50%;margin-left:-25px}@media (max-width:512px){.vjs-afterglow-skin .vjs-play-control{position:relative;left:auto;margin-left:0;width:25px}}.vjs-afterglow-skin .vjs-play-control:before{content:"\\e602";margin-left:1px;font-size:22px}@media (max-width:768px){.vjs-afterglow-skin .vjs-play-control:before{font-size:20px;line-height:22px;top:-5px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-play-control:before{font-size:10px;line-height:10px;top:0}}.vjs-afterglow-skin.vjs-playing .vjs-play-control:before{content:"\\e60a"}.vjs-afterglow-skin .vjs-playback-rate .vjs-playback-rate-value{font-size:1.5em;line-height:2;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,.5)}.vjs-afterglow-skin .vjs-playback-rate .vjs-playback-rate-value.vjs-menu-button .vjs-menu .vjs-menu-content{width:30px;left:15px;list-style:none}.vjs-afterglow-skin .vjs-mute-control,.vjs-afterglow-skin .vjs-volume-menu-button{cursor:pointer;float:right;width:auto;padding-left:32px;margin-left:10px}.vjs-afterglow-skin .vjs-mute-control:before,.vjs-afterglow-skin .vjs-volume-menu-button:before{content:"\\e605";cursor:pointer}.vjs-afterglow-skin .vjs-mute-control.vjs-vol-0:before,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-vol-0:before{content:"\\e603"}.vjs-afterglow-skin .vjs-mute-control.vjs-vol-1:before,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-vol-1:before{content:"\\e606"}.vjs-afterglow-skin .vjs-mute-control.vjs-vol-2:before,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-vol-2:before{content:"\\e607"}@media (max-width:512px){.vjs-afterglow-skin .vjs-mute-control,.vjs-afterglow-skin .vjs-volume-menu-button{height:26px;padding-left:27px}}.vjs-afterglow-skin .vjs-volume-control{float:right}.vjs-afterglow-skin .vjs-volume-level{position:absolute;top:0;left:0;height:4px;width:100%;background-color:#fff;border-radius:4px}.vjs-afterglow-skin .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{display:block;width:0;height:10px;border-top-color:transparent;position:relative;padding-left:0;top:0;padding-top:17px;padding-bottom:17px;left:0;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-afterglow-skin .vjs-volume-menu-button .vjs-menu .vjs-menu-content,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu .vjs-menu-content{height:10px;width:0;float:right;left:0;box-shadow:none;background:0 0;position:relative;bottom:auto;overflow:hidden;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu{width:74px}@media (max-width:768px){.vjs-afterglow-skin .vjs-mute-control,.vjs-afterglow-skin .vjs-volume-menu-button{margin-left:0}.vjs-afterglow-skin .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{left:0;padding-top:13px;padding-bottom:12px}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu{padding-left:5px;padding-right:5px;width:50px}}@media (max-width:500px){.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu{display:none}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu.vjs-lock-showing,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu.vjs-lock-showing{display:none!important}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-menu-content,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content{display:none}}.vjs-afterglow-skin .vjs-volume-bar .vjs-volume-handle:before,.vjs-afterglow-skin .vjs-volume-bar .vjs-volume-level:before,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal .vjs-volume-handle:before,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level:before{display:none}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-menu-content,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content{height:10px;width:61px;bottom:0;left:0;float:none;box-shadow:none;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}@media (max-width:768px){.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-menu-content,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content{width:41px;left:-5px}.vjs-afterglow-skin .vjs-volume-bar,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal{width:0}}.vjs-afterglow-skin .vjs-volume-bar,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal{width:0;left:1px;height:5px;margin:0;background-color:rgba(255,255,255,.3);border-radius:5px;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-afterglow-skin .vjs-volume-bar .vjs-volume-handle,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal .vjs-volume-handle{width:0;height:0;left:100%}.vjs-afterglow-skin .vjs-volume-bar .vjs-volume-level,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level{height:4px;border-radius:4px}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-volume-bar.vjs-slider-horizontal,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-volume-bar.vjs-slider-horizontal{width:60px}@media (max-width:768px){.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-volume-bar.vjs-slider-horizontal,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-volume-bar.vjs-slider-horizontal{width:40px}}.vjs-afterglow-skin .vjs-menu-button-popup .vjs-menu{position:relative;float:right}.vjs-afterglow-skin .vjs-progress-control{position:absolute;left:0;right:0;width:auto;height:5px;top:-9px;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;transition:all .3s}.vjs-afterglow-skin .vjs-progress-control:hover{top:-11px;height:9px;-webkit-transition:all 0s;-moz-transition:all 0s;-o-transition:all 0s;transition:all 0s}@media (max-width:768px){.vjs-afterglow-skin .vjs-progress-control:hover{top:-9px;height:7px}}.vjs-afterglow-skin:hover .vjs-progress-control{-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-afterglow-skin .vjs-progress-holder{height:100%}.vjs-afterglow-skin .vjs-progress-holder .vjs-load-progress,.vjs-afterglow-skin .vjs-progress-holder .vjs-play-progress{position:absolute;display:block;height:100%;margin:0;padding:0;width:0;left:0;top:0;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px}.vjs-afterglow-skin .vjs-progress-holder .vjs-load-progress div,.vjs-afterglow-skin.vjs-live .vjs-progress-control,.vjs-afterglow-skin.vjs-live .vjs-time-controls,.vjs-afterglow-skin.vjs-live .vjs-time-divider{display:none}.vjs-afterglow-skin .vjs-play-progress{background-color:#fff;box-shadow:0 0 5px rgba(255,255,255,.6);-moz-box-shadow:0 0 5px rgba(255,255,255,.6);-webkit-box-shadow:0 0 5px rgba(255,255,255,.6)}.vjs-afterglow-skin .vjs-load-progress{background:#646464;background:rgba(255,255,255,.2)}.vjs-afterglow-skin .vjs-load-progress div{background:#787878;background:rgba(255,255,255,.2)}.vjs-afterglow-skin .vjs-seek-handle{width:10px;height:100%}.vjs-afterglow-skin.vjs-live .vjs-live-display{display:block}.vjs-afterglow-skin .vjs-live-display{display:none;font-size:1em;line-height:3em}.vjs-afterglow-skin .vjs-time-controls{font-size:22px}.vjs-afterglow-skin .vjs-current-time,.vjs-afterglow-skin .vjs-duration{height:23px;position:relative;float:left;margin-top:7px;padding:0;font-weight:100;font-size:21px;line-height:22px;display:block;width:auto}@media (max-width:768px){.vjs-afterglow-skin .vjs-current-time,.vjs-afterglow-skin .vjs-duration{font-size:17px;line-height:17px}}.vjs-afterglow-skin.vjs-no-flex .vjs-current-time,.vjs-afterglow-skin.vjs-no-flex .vjs-duration{display:block}.vjs-afterglow-skin .vjs-current-time{margin-left:30px}@media (max-width:768px){.vjs-afterglow-skin .vjs-current-time{margin-left:20px}}.vjs-afterglow-skin .vjs-duration{float:right;text-align:right;margin-right:30px;padding-left:10px}@media (max-width:768px){.vjs-afterglow-skin .vjs-duration{margin-right:20px;padding-left:6px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-current-time,.vjs-afterglow-skin .vjs-duration{font-size:14px;line-height:14px;margin-top:5px}.vjs-afterglow-skin .vjs-current-time{margin-left:12px}.vjs-afterglow-skin .vjs-duration{margin-right:12px;padding-left:2px}}.vjs-afterglow-skin .vjs-remaining-time{display:none;float:right}.vjs-afterglow-skin .vjs-time-divider{float:left;line-height:3em}.vjs-afterglow-skin .vjs-top-control-bar{width:auto;height:auto;text-align:right;position:absolute;right:26px;top:13px;display:none;opacity:0}@media (max-width:768px){.vjs-afterglow-skin .vjs-top-control-bar{top:10px;right:18px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-top-control-bar{top:6px;right:10px}}.vjs-afterglow-skin .vjs-top-control-bar .vjs-control{width:20px;height:30px;text-align:right;line-height:13px;font-size:13px;cursor:pointer;opacity:.9;margin-left:20px}@media (max-width:768px){.vjs-afterglow-skin .vjs-top-control-bar .vjs-control{font-size:9px;line-height:9px;margin-left:5px}}.vjs-afterglow-skin .vjs-top-control-bar .vjs-control:hover{opacity:1}.vjs-afterglow-skin .vjs-top-control-bar .vjs-fullscreen-control:before{content:"\\e608"}.vjs-afterglow-skin .vjs-top-control-bar .vjs-lightbox-close-button:before{content:"\\e601"}.vjs-afterglow-skin.vjs-fullscreen .vjs-top-control-bar .vjs-fullscreen-control:before{content:"\\e609"}.vjs-afterglow-skin.vjs-has-started .vjs-top-control-bar{display:block;visibility:visible;opacity:1;transition:visibility .1s,opacity .1s}.vjs-afterglow-skin.vjs-has-started .vjs-top-control-bar .vjs-control{opacity:.9;-webkit-transition:visibility .1s,opacity .1s;-moz-transition:visibility .1s,opacity .1s;-o-transition:visibility .1s,opacity .1s;transition:visibility .1s,opacity .1s}.vjs-afterglow-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-top-control-bar{display:block;visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.vjs-afterglow-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-top-control-bar .vjs-control{opacity:.9}.vjs-afterglow-skin .vjs-big-play-button{display:block;z-index:2;position:absolute;width:80px;height:80px;text-align:center;vertical-align:middle;cursor:pointer;top:50%;left:50%;margin-left:-40px;margin-top:-40px;border:none;background:0 0;visibility:visible;opacity:1;-webkit-transition:all .4s;-moz-transition:all .4s;-o-transition:all .4s;transition:all .4s}.vjs-afterglow-skin.vjs-controls-disabled .vjs-big-play-button{display:none}.vjs-afterglow-skin.vjs-has-started .vjs-big-play-button{display:none;opacity:0}.vjs-afterglow-skin.vjs-has-started.vjs-ended .vjs-big-play-button{display:block;visibility:visible;opacity:1}.vjs-afterglow-skin.vjs-using-native-controls .vjs-big-play-button{display:block}.vjs-afterglow-skin .vjs-big-play-button:focus,.vjs-afterglow-skin:hover .vjs-big-play-button{outline:0;border:none;background:0 0;-webkit-transition:all 0s;-moz-transition:all 0s;-o-transition:all 0s;transition:all 0s}.vjs-afterglow-skin.vjs-seeking .vjs-big-play-button,.vjs-afterglow-skin.vjs-waiting .vjs-big-play-button{display:none;-webkit-animation:spin 1.5s infinite linear;-moz-animation:spin 1.5s infinite linear;-o-animation:spin 1.5s infinite linear;animation:spin 1.5s infinite linear}.vjs-afterglow-skin .vjs-big-play-button:before{content:"\\e602";font-family:afterglow-icon;line-height:80px;font-size:80px;text-shadow:0 0 5px #000;text-shadow:0 0 5px rgba(0,0,0,.6);text-align:center;position:absolute;left:0;width:100%;height:100%}@media (max-width:768px){.vjs-afterglow-skin .vjs-big-play-button:before{font-size:60px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-big-play-button:before{font-size:40px}}.vjs-afterglow-skin .vjs-error-display,.vjs-afterglow-skin.vjs-error .vjs-big-play-button{display:none}.vjs-afterglow-skin.vjs-error .vjs-error-display{display:block;position:absolute;left:0;top:0;width:100%;height:100%}.vjs-afterglow-skin .vjs-error .vjs-error-display:before{content:\'\'}.vjs-afterglow-skin .vjs-error-display div{position:absolute;bottom:40px;right:0;left:0;font-family:\'Open Sans\',Helvetica light,Helvetica,sans-serif;font-size:16px;text-align:center;padding:3px;background:#000;background:rgba(0,0,0,.5)}.vjs-afterglow-skin .vjs-error-display a,.vjs-afterglow-skin .vjs-error-display a:visited{color:#F4A460}.vjs-afterglow-skin .vjs-loading-spinner{position:absolute;top:50%;left:50%;width:32px;height:32px;margin-left:-16px;margin-top:-16px;clear:both;border:3px solid rgba(255,255,255,.1);border-top:3px rgba(255,255,255,.95) solid;border-radius:50%;-webkit-animation:spCircRot 1.6s infinite linear;animation:spCircRot 1.6s infinite linear}.vjs-afterglow-skin .vjs-loading-spinner:after,.vjs-afterglow-skin .vjs-loading-spinner:before{content:none;border:0}.vjs-afterglow-skin .vjs-seeking .vjs-loading-spinner,.vjs-afterglow-skin .vjs-waiting .vjs-loading-spinner{display:block;-webkit-animation:spin 1.5s infinite linear;-moz-animation:spin 1.5s infinite linear;-o-animation:spin 1.5s infinite linear;animation:spin 1.5s infinite linear}.vjs-afterglow-skin .vjs-error .vjs-loading-spinner{display:none;-webkit-animation:none;-moz-animation:none;-o-animation:none;animation:none}@-moz-keyframes spin{0%{-moz-transform:rotate(0)}100%{-moz-transform:rotate(359deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(359deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0)}100%{-o-transform:rotate(359deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(359deg)}}.vjs-afterglow-skin .vjs-menu-button{float:right;cursor:pointer}.vjs-afterglow-skin .vjs-menu-button.vjs-menu-button-inline{width:auto}.vjs-afterglow-skin .vjs-menu-button.vjs-menu-button-inline:before{width:30px}.vjs-afterglow-skin .vjs-menu{display:none;position:relative;bottom:auto;left:-85px;width:0;height:0;margin-bottom:0}@media (max-width:768px){.vjs-afterglow-skin .vjs-menu{left:-75px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-menu{left:-70px}}.vjs-afterglow-skin .vjs-menu-button .vjs-menu .vjs-menu-content{display:block;padding:0 0 70px;margin:0;position:absolute;bottom:-50px;width:100px;max-height:none;overflow:auto;left:12px;font-family:\'Open Sans\',Helvetica Light,Helvetica,sans-serif;background:0 0}@media (max-width:768px){.vjs-afterglow-skin .vjs-menu-button .vjs-menu .vjs-menu-content{left:12px;bottom:-40px;padding-bottom:60px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-menu-button .vjs-menu .vjs-menu-content{left:11px;bottom:-30px;padding-bottom:50px}}.vjs-afterglow-skin .vjs-control-content .vjs-menu.vjs-lock-showing,.vjs-afterglow-skin .vjs-menu-button:hover .vjs-control-content .vjs-menu{display:block}.vjs-afterglow-skin.vjs-scrubbing .vjs-menu-button:hover .vjs-control-content .vjs-menu{display:none}.vjs-afterglow-skin .vjs-menu-button ul li{list-style:none;margin:0;padding:0 5px;line-height:16px;font-size:14px;text-align:center;text-transform:lowercase;opacity:.7;text-shadow:0 0 0 rgba(255,255,255,0)}.vjs-afterglow-skin .vjs-menu-button ul li.vjs-selected,.vjs-afterglow-skin .vjs-menu-button ul li.vjs-selected:focus,.vjs-afterglow-skin .vjs-menu-button ul li.vjs-selected:hover,.vjs-afterglow-skin .vjs-menu-button ul li:focus,.vjs-afterglow-skin .vjs-menu-button ul li:hover{text-shadow:0 0 5px rgba(255,255,255,.6);opacity:1;background:0 0;color:#fff}.vjs-afterglow-skin .vjs-menu-button ul li.vjs-menu-title{text-align:center;text-transform:uppercase;font-size:1em;line-height:2em;padding:0;margin:0 0 .3em;font-weight:700;cursor:afterglow}.vjs-afterglow-skin .vjs-subtitles-button:before{content:"\\e60d"}.vjs-afterglow-skin .vjs-captions-button:before{content:"\\e600"}.vjs-afterglow-skin video::-webkit-media-text-track-container{bottom:40px;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;transition:all .3s}@media (max-width:768px){.vjs-afterglow-skin video::-webkit-media-text-track-container{bottom:20px}}.vjs-afterglow-skin video::-webkit-media-text-track-background{background-color:rgba(0,0,0,.5);border-radius:3px;padding:10px 14px}.vjs-afterglow-skin video::-webkit-media-text-track-display{color:#fff;font-family:Open Sans,Georgia;font-size:16px;padding:5px 10px 8px}@media (max-width:768px){.vjs-afterglow-skin video::-webkit-media-text-track-display{font-size:14px}}@media (max-width:512px){.vjs-afterglow-skin video::-webkit-media-text-track-container{bottom:10px}.vjs-afterglow-skin video::-webkit-media-text-track-display{font-size:11px}}.vjs-afterglow-skin.vjs-user-active video::-webkit-media-text-track-container{bottom:70px}@media (max-width:768px){.vjs-afterglow-skin.vjs-user-active video::-webkit-media-text-track-container{bottom:40px}}.vjs-afterglow-skin .vjs-chapters-button.vjs-menu-button .vjs-menu .vjs-menu-content{width:24em;left:-12em}.vjs-afterglow-skin.vjs-responsive,.vjs-afterglow-skin.vjs-responsive video{width:100%;height:auto}.vjs-afterglow-skin .vjs-captions-button:focus .vjs-control-content:before,.vjs-afterglow-skin .vjs-captions-button:hover .vjs-control-content:before{-webkit-box-shadow:0 0 1em #fff;-moz-box-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}.vjs-afterglow-skin .vjs-tech:focus{outline:0}.vjs-afterglow-skin.vjs-responsive.vjs-has-started .vjs-tech{padding-top:0!important}.vjs-afterglow-skin.vjs-responsive.vjs-fullscreen video{height:100%}.vjs-afterglow-skin .vjs-ag-res-button{float:right;cursor:pointer;width:50px;font-family:afterglow-icon}@media (max-width:768px){.vjs-afterglow-skin .vjs-ag-res-button{width:30px;margin-left:-4px}}@media (max-width:512px){.vjs-afterglow-skin.vjs-user-active video::-webkit-media-text-track-container{bottom:30px}.vjs-afterglow-skin .vjs-ag-res-button{width:20px;margin-right:5px;margin-left:0}}.vjs-afterglow-skin .vjs-ag-res-button:before{font-family:afterglow-icon;content:"\\e60f"}.vjs-afterglow-skin .vjs-ag-res-button.vjs-ag-res-hd:before{content:"\\e60b";margin-left:.5px}.vjs-afterglow-skin.vjs-IE .vjs-ag-res-button{font-size:17px;line-height:18px;padding-top:10px}@media (max-width:768px){.vjs-afterglow-skin.vjs-IE .vjs-ag-res-button{font-size:9px;line-height:9px;margin-left:5px}}.vjs-afterglow-skin .vjs-poster{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";-moz-opacity:.8;-khtml-opacity:.8;opacity:.8;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-afterglow-skin:hover .vjs-poster{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";-moz-opacity:1;-khtml-opacity:1;opacity:1}.vjs-afterglow-skin.vjs-youtube>div:first-child{position:absolute!important;margin:0;height:100%;top:0;width:100%}.video-js,.vjs-caption-settings{position:relative;background-color:#000}.vjs-afterglow-skin.vjs-youtube iframe{display:block;visibility:hidden}.vjs-afterglow-skin.vjs-youtube.vjs-IE iframe{display:block;visibility:visible}.vjs-afterglow-skin.vjs-youtube .vjs-control-bar{right:80px;width:auto;-webkit-transition:all .1s;-moz-transition:all .1s;-o-transition:all .1s;transition:all .1s;-webkit-transition-delay:.4s;-moz-transition-delay:.4s;-o-transition-delay:.4s;transition-delay:.4s}.vjs-afterglow-skin.vjs-youtube.vjs-has-started .vjs-control-bar{right:0;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;transition:all .3s;-webkit-transition-delay:.4s;-moz-transition-delay:.4s;-o-transition-delay:.4s;transition-delay:.4s}.vjs-afterglow-skin.vjs-youtube.vjs-has-started.vjs-ended .vjs-control-bar,.vjs-afterglow-skin.vjs-youtube.vjs-has-started.vjs-paused .vjs-control-bar{right:80px;width:auto;-webkit-transition:all .1s;-moz-transition:all .1s;-o-transition:all .1s;transition:all .1s}.video-js.vjs-has-started .vjs-poster,.vjs-poster{-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s}.vjs-afterglow-skin.vjs-youtube.vjs-iOS .vjs-big-play-button,.vjs-afterglow-skin.vjs-youtube.vjs-iOS .vjs-poster,.vjs-afterglow-skin.vjs-youtube.vjs-using-native-controls .vjs-big-play-button,.vjs-afterglow-skin.vjs-youtube.vjs-using-native-controls .vjs-poster{display:none}.vjs-afterglow-skin.vjs-youtube.vjs-iOS iframe,.vjs-afterglow-skin.vjs-youtube.vjs-using-native-controls iframe{display:block;visibility:visible}.vjs-afterglow-skin.vjs-youtube.vjs-iOS .vjs-loading-spinner,.vjs-afterglow-skin.vjs-youtube.vjs-iOS .vjs-text-track-display,.vjs-afterglow-skin.vjs-youtube.vjs-using-native-controls .vjs-loading-spinner,.vjs-afterglow-skin.vjs-youtube.vjs-using-native-controls .vjs-text-track-display{display:none}.vjs-afterglow-skin.vjs-IE.vjs-youtube iframe,.vjs-afterglow-skin.vjs-has-started.vjs-youtube iframe{display:block;visibility:visible}.video-js{padding:0;font-size:22px;vertical-align:middle;font-weight:400;font-style:normal;font-family:Arial,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.video-js:-moz-full-screen{position:absolute}.video-js:-webkit-full-screen{width:100%!important;height:100%!important}.video-js .vjs-tech,.vjs-poster{top:0;width:100%;position:absolute;left:0}.video-js .vjs-tech{height:100%}body.vjs-full-window{padding:0;margin:0;height:100%;overflow-y:auto}.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}.vjs-poster{background-repeat:no-repeat;background-position:50% 50%;background-size:contain;cursor:pointer;margin:0;padding:0;right:0;bottom:0;transition:all .2s}.vjs-poster img{display:block;margin:0 auto;max-height:100%;padding:0}.video-js.vjs-has-started .vjs-poster{display:none;visibility:hidden;opacity:0;transition:all .2s}.video-js.vjs-has-started.vjs-ended .vjs-poster{display:block;visibility:visible;opacity:1;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.video-js.vjs-audio.vjs-has-started .vjs-poster{display:block}.video-js.vjs-controls-disabled .vjs-poster{display:none}.video-js.vjs-using-native-controls .vjs-poster{display:block}.video-js .vjs-text-track-display{position:absolute;bottom:50px;pointer-events:none}.vjs-caption-settings{top:1em;opacity:.75;color:#FFF;margin:0 auto;padding:.5em;height:15em;font-family:Arial,Helvetica,sans-serif;font-size:12px;width:40em}.vjs-caption-settings .vjs-tracksettings{top:0;bottom:2em;left:0;right:0;position:absolute;overflow:auto}.vjs-caption-settings .vjs-tracksettings-colors,.vjs-caption-settings .vjs-tracksettings-font{float:left}.vjs-caption-settings .vjs-tracksettings-colors:after,.vjs-caption-settings .vjs-tracksettings-controls:after,.vjs-caption-settings .vjs-tracksettings-font:after{clear:both}.vjs-caption-settings .vjs-tracksettings-controls{position:absolute;bottom:1em;right:1em}.vjs-caption-settings .vjs-tracksetting{margin:5px;padding:3px;min-height:40px}.vjs-caption-settings .vjs-tracksetting label{display:block;width:100px;margin-bottom:5px}.vjs-caption-settings .vjs-tracksetting span{display:inline;margin-left:5px}.vjs-caption-settings .vjs-tracksetting>div{margin-bottom:5px;min-height:20px}.vjs-caption-settings .vjs-tracksetting>div:last-child{margin-bottom:0;padding-bottom:0;min-height:0}.vjs-caption-settings label>input{margin-right:10px}.vjs-caption-settings input[type=button]{width:40px;height:40px}.vjs-hidden{display:none!important}.vjs-lock-showing{display:block!important;opacity:1;visibility:visible}.vjs-no-js{padding:2em;color:#ccc;background-color:#333;font-size:1.8em;font-family:Arial,sans-serif;text-align:center;width:30em;height:15em;margin:0 auto}.vjs-no-js a,.vjs-no-js a:visited{color:#F4A460}@-webkit-keyframes spCircRot{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(359deg)}}@keyframes spCircRot{from{transform:rotate(0)}to{transform:rotate(359deg)}}'),
function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (n) {
        o.innerText = e
    }
}(document, ".vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar{background-color:#fff;background-color:rgba(255,255,255,.9);bottom:0;height:51px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar *{color:#000}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control{top:-5px;background-color:#fff;background-color:rgba(255,255,255,.9)}@media (max-width:768px){.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar{height:42px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control{background-color:#fff}}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control:hover{top:-7px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control .vjs-progress-holder{margin:0}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-load-progress,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-play-progress{border-radius:0;-moz-border-radius:0;-webkit-border-radius:0}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-load-progress{background-color:#777}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-play-progress{background-color:#000;box-shadow:0 0 5px rgba(0,0,0,.6);-moz-box-shadow:0 0 5px rgba(0,0,0,.6);-webkit-box-shadow:0 0 5px rgba(0,0,0,.6)}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-duration{margin-top:12px}@media (max-width:768px){.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-duration{margin-top:11px}}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-current-time{margin-left:20px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-duration{margin-right:20px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{padding-top:22px}@media (max-width:512px){.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar{height:34px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-play-control:before{font-size:11px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-duration{margin-top:9px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-current-time{margin-left:14px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-duration{margin-right:10px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{padding-top:14pxpx}}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-bar{background-color:#555;background-color:rgba(0,0,0,.3)}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-bar .vjs-volume-level{background-color:#000}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-menu ul.vjs-menu-content li{color:#fff;color:rgba(255,255,255,.8)}.vjs-afterglow-skin.afterglow-skin-light .vjs-control:before{margin-top:5px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar{right:20px;top:16px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar *{color:#000}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button{background-color:#fff;background-color:rgba(255,255,255,.9);width:32px;height:32px;border-radius:50px;-moz-border-radius:50px;-webkit-border-radius:50px;margin-left:7px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button:before{margin-top:-1px;font-size:15px;line-height:16px}@media (max-width:768px){.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar{top:14px;right:16px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button{width:28px;height:28px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button:before{font-size:14px;line-height:15px;margin-top:-2px}}@media (max-width:512px){.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button{width:24px;height:24px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button:before{font-size:12px;line-height:13px;margin-top:0}}.vjs-afterglow-skin.afterglow-skin-light.vjs-youtube.vjs-has-started.vjs-paused .vjs-control-bar{right:0;background-color:#fff}"),
function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (n) {
        o.innerText = e
    }
}(document, ".afterglow-lightbox-wrapper{width:100%;height:100%;position:fixed;top:0;left:0;z-index:999999}.afterglow-lightbox-wrapper .cover{width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;background-color:rgba(0,0,0,.85)}.afterglow-lightbox-wrapper .afterglow-lightbox{display:block!important;position:absolute;top:0;left:0}.afterglow-lightbox-wrapper .afterglow-lightbox .afterglow-lightboxplayer,.afterglow-lightbox-wrapper .afterglow-lightbox .afterglow-lightboxplayer video{display:block!important}.afterglow-lightbox-wrapper .afterglow-lightbox div.vjs-fullscreen{top:0!important;left:0!important}.afterglow-lightbox-wrapper .afterglow-lightbox .vjs-paused.vjs-ended .vjs-big-play-button{display:block}#afterglow-lightbox-videoel,.afterglow-lightbox-wrapper.hidden,.afterglow-lightboxplayer{display:none}"),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.videojs = t()
    }
}(function() {
    var t;
    return function e(t, o, n) {
        function i(s, a) {
            if (!o[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (r) return r(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = o[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var o = t[s][1][e];
                    return i(o ? o : e)
                }, c, c.exports, e, t, o, n)
            }
            return o[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]);
        return i
    }({
        1: [function(t, e, o) {
            (function(o) {
                var n = "undefined" != typeof o ? o : "undefined" != typeof window ? window : {},
                    i = t("min-document");
                if ("undefined" != typeof document) e.exports = document;
                else {
                    var r = n["__GLOBAL_DOCUMENT_CACHE@4"];
                    r || (r = n["__GLOBAL_DOCUMENT_CACHE@4"] = i), e.exports = r
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "min-document": 3
        }],
        2: [function(t, e, o) {
            (function(t) {
                "undefined" != typeof window ? e.exports = window : "undefined" != typeof t ? e.exports = t : "undefined" != typeof self ? e.exports = self : e.exports = {}
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        3: [function(t, e, o) {}, {}],
        4: [function(t, e, o) {
            var n = t("../internal/getNative"),
                i = n(Date, "now"),
                r = i || function() {
                    return (new Date).getTime()
                };
            e.exports = r
        }, {
            "../internal/getNative": 20
        }],
        5: [function(t, e, o) {
            function n(t, e, o) {
                function n() {
                    y && clearTimeout(y), h && clearTimeout(h), A = 0, h = y = m = void 0
                }

                function l(e, o) {
                    o && clearTimeout(o), h = y = m = void 0, e && (A = r(), d = t.apply(g, f), y || h || (f = g = void 0))
                }

                function u() {
                    var t = e - (r() - v);
                    t <= 0 || t > e ? l(m, h) : y = setTimeout(u, t)
                }

                function c() {
                    l(j, y)
                }

                function p() {
                    if (f = arguments, v = r(), g = this, m = j && (y || !w), b === !1) var o = w && !y;
                    else {
                        h || w || (A = v);
                        var n = b - (v - A),
                            i = n <= 0 || n > b;
                        i ? (h && (h = clearTimeout(h)), A = v, d = t.apply(g, f)) : h || (h = setTimeout(c, n))
                    }
                    return i && y ? y = clearTimeout(y) : y || e === b || (y = setTimeout(u, e)), o && (i = !0, d = t.apply(g, f)), !i || y || h || (f = g = void 0), d
                }
                var f, h, d, v, g, y, m, A = 0,
                    b = !1,
                    j = !0;
                if ("function" != typeof t) throw new TypeError(s);
                if (e = e < 0 ? 0 : +e || 0, o === !0) {
                    var w = !0;
                    j = !1
                } else i(o) && (w = !!o.leading, b = "maxWait" in o && a(+o.maxWait || 0, e), j = "trailing" in o ? !!o.trailing : j);
                return p.cancel = n, p
            }
            var i = t("../lang/isObject"),
                r = t("../date/now"),
                s = "Expected a function",
                a = Math.max;
            e.exports = n
        }, {
            "../date/now": 4,
            "../lang/isObject": 33
        }],
        6: [function(t, e, o) {
            function n(t, e) {
                if ("function" != typeof t) throw new TypeError(i);
                return e = r(void 0 === e ? t.length - 1 : +e || 0, 0),
                    function() {
                        for (var o = arguments, n = -1, i = r(o.length - e, 0), s = Array(i); ++n < i;) s[n] = o[e + n];
                        switch (e) {
                            case 0:
                                return t.call(this, s);
                            case 1:
                                return t.call(this, o[0], s);
                            case 2:
                                return t.call(this, o[0], o[1], s)
                        }
                        var a = Array(e + 1);
                        for (n = -1; ++n < e;) a[n] = o[n];
                        return a[e] = s, t.apply(this, a)
                    }
            }
            var i = "Expected a function",
                r = Math.max;
            e.exports = n
        }, {}],
        7: [function(t, e, o) {
            function n(t, e, o) {
                var n = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError(s);
                return o === !1 ? n = !1 : r(o) && (n = "leading" in o ? !!o.leading : n, a = "trailing" in o ? !!o.trailing : a), i(t, e, {
                    leading: n,
                    maxWait: +e,
                    trailing: a
                })
            }
            var i = t("./debounce"),
                r = t("../lang/isObject"),
                s = "Expected a function";
            e.exports = n
        }, {
            "../lang/isObject": 33,
            "./debounce": 5
        }],
        8: [function(t, e, o) {
            function n(t, e) {
                var o = -1,
                    n = t.length;
                for (e || (e = Array(n)); ++o < n;) e[o] = t[o];
                return e
            }
            e.exports = n
        }, {}],
        9: [function(t, e, o) {
            function n(t, e) {
                for (var o = -1, n = t.length; ++o < n && e(t[o], o, t) !== !1;);
                return t
            }
            e.exports = n
        }, {}],
        10: [function(t, e, o) {
            function n(t, e, o) {
                o || (o = {});
                for (var n = -1, i = e.length; ++n < i;) {
                    var r = e[n];
                    o[r] = t[r]
                }
                return o
            }
            e.exports = n
        }, {}],
        11: [function(t, e, o) {
            var n = t("./createBaseFor"),
                i = n();
            e.exports = i
        }, {
            "./createBaseFor": 18
        }],
        12: [function(t, e, o) {
            function n(t, e) {
                return i(t, e, r)
            }
            var i = t("./baseFor"),
                r = t("../object/keysIn");
            e.exports = n
        }, {
            "../object/keysIn": 39,
            "./baseFor": 11
        }],
        13: [function(t, e, o) {
            function n(t, e, o, f, h) {
                if (!l(t)) return t;
                var d = a(e) && (s(e) || c(e)),
                    v = d ? void 0 : p(e);
                return i(v || e, function(i, s) {
                    if (v && (s = i, i = e[s]), u(i)) f || (f = []), h || (h = []), r(t, e, s, n, o, f, h);
                    else {
                        var a = t[s],
                            l = o ? o(a, i, s, t, e) : void 0,
                            c = void 0 === l;
                        c && (l = i), void 0 === l && (!d || s in t) || !c && (l === l ? l === a : a !== a) || (t[s] = l)
                    }
                }), t
            }
            var i = t("./arrayEach"),
                r = t("./baseMergeDeep"),
                s = t("../lang/isArray"),
                a = t("./isArrayLike"),
                l = t("../lang/isObject"),
                u = t("./isObjectLike"),
                c = t("../lang/isTypedArray"),
                p = t("../object/keys");
            e.exports = n
        }, {
            "../lang/isArray": 30,
            "../lang/isObject": 33,
            "../lang/isTypedArray": 36,
            "../object/keys": 38,
            "./arrayEach": 9,
            "./baseMergeDeep": 14,
            "./isArrayLike": 21,
            "./isObjectLike": 26
        }],
        14: [function(t, e, o) {
            function n(t, e, o, n, p, f, h) {
                for (var d = f.length, v = e[o]; d--;)
                    if (f[d] == v) return void(t[o] = h[d]);
                var g = t[o],
                    y = p ? p(g, v, o, t, e) : void 0,
                    m = void 0 === y;
                m && (y = v, a(v) && (s(v) || u(v)) ? y = s(g) ? g : a(g) ? i(g) : [] : l(v) || r(v) ? y = r(g) ? c(g) : l(g) ? g : {} : m = !1), f.push(v), h.push(y), m ? t[o] = n(y, v, p, f, h) : (y === y ? y !== g : g === g) && (t[o] = y)
            }
            var i = t("./arrayCopy"),
                r = t("../lang/isArguments"),
                s = t("../lang/isArray"),
                a = t("./isArrayLike"),
                l = t("../lang/isPlainObject"),
                u = t("../lang/isTypedArray"),
                c = t("../lang/toPlainObject");
            e.exports = n
        }, {
            "../lang/isArguments": 29,
            "../lang/isArray": 30,
            "../lang/isPlainObject": 34,
            "../lang/isTypedArray": 36,
            "../lang/toPlainObject": 37,
            "./arrayCopy": 8,
            "./isArrayLike": 21
        }],
        15: [function(t, e, o) {
            function n(t) {
                return function(e) {
                    return null == e ? void 0 : i(e)[t]
                }
            }
            var i = t("./toObject");
            e.exports = n
        }, {
            "./toObject": 28
        }],
        16: [function(t, e, o) {
            function n(t, e, o) {
                if ("function" != typeof t) return i;
                if (void 0 === e) return t;
                switch (o) {
                    case 1:
                        return function(o) {
                            return t.call(e, o)
                        };
                    case 3:
                        return function(o, n, i) {
                            return t.call(e, o, n, i)
                        };
                    case 4:
                        return function(o, n, i, r) {
                            return t.call(e, o, n, i, r)
                        };
                    case 5:
                        return function(o, n, i, r, s) {
                            return t.call(e, o, n, i, r, s)
                        }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var i = t("../utility/identity");
            e.exports = n
        }, {
            "../utility/identity": 42
        }],
        17: [function(t, e, o) {
            function n(t) {
                return s(function(e, o) {
                    var n = -1,
                        s = null == e ? 0 : o.length,
                        a = s > 2 ? o[s - 2] : void 0,
                        l = s > 2 ? o[2] : void 0,
                        u = s > 1 ? o[s - 1] : void 0;
                    for ("function" == typeof a ? (a = i(a, u, 5), s -= 2) : (a = "function" == typeof u ? u : void 0, s -= a ? 1 : 0), l && r(o[0], o[1], l) && (a = s < 3 ? void 0 : a, s = 1); ++n < s;) {
                        var c = o[n];
                        c && t(e, c, a)
                    }
                    return e
                })
            }
            var i = t("./bindCallback"),
                r = t("./isIterateeCall"),
                s = t("../function/restParam");
            e.exports = n
        }, {
            "../function/restParam": 6,
            "./bindCallback": 16,
            "./isIterateeCall": 24
        }],
        18: [function(t, e, o) {
            function n(t) {
                return function(e, o, n) {
                    for (var r = i(e), s = n(e), a = s.length, l = t ? a : -1; t ? l-- : ++l < a;) {
                        var u = s[l];
                        if (o(r[u], u, r) === !1) break
                    }
                    return e
                }
            }
            var i = t("./toObject");
            e.exports = n
        }, {
            "./toObject": 28
        }],
        19: [function(t, e, o) {
            var n = t("./baseProperty"),
                i = n("length");
            e.exports = i
        }, {
            "./baseProperty": 15
        }],
        20: [function(t, e, o) {
            function n(t, e) {
                var o = null == t ? void 0 : t[e];
                return i(o) ? o : void 0
            }
            var i = t("../lang/isNative");
            e.exports = n
        }, {
            "../lang/isNative": 32
        }],
        21: [function(t, e, o) {
            function n(t) {
                return null != t && r(i(t))
            }
            var i = t("./getLength"),
                r = t("./isLength");
            e.exports = n
        }, {
            "./getLength": 19,
            "./isLength": 25
        }],
        22: [function(t, e, o) {
            var n = function() {
                try {
                    Object({
                        toString: 0
                    } + "")
                } catch (t) {
                    return function() {
                        return !1
                    }
                }
                return function(t) {
                    return "function" != typeof t.toString && "string" == typeof(t + "")
                }
            }();
            e.exports = n
        }, {}],
        23: [function(t, e, o) {
            function n(t, e) {
                return t = "number" == typeof t || i.test(t) ? +t : -1, e = null == e ? r : e, t > -1 && t % 1 == 0 && t < e
            }
            var i = /^\d+$/,
                r = 9007199254740991;
            e.exports = n
        }, {}],
        24: [function(t, e, o) {
            function n(t, e, o) {
                if (!s(o)) return !1;
                var n = typeof e;
                if ("number" == n ? i(o) && r(e, o.length) : "string" == n && e in o) {
                    var a = o[e];
                    return t === t ? t === a : a !== a
                }
                return !1
            }
            var i = t("./isArrayLike"),
                r = t("./isIndex"),
                s = t("../lang/isObject");
            e.exports = n
        }, {
            "../lang/isObject": 33,
            "./isArrayLike": 21,
            "./isIndex": 23
        }],
        25: [function(t, e, o) {
            function n(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i
            }
            var i = 9007199254740991;
            e.exports = n
        }, {}],
        26: [function(t, e, o) {
            function n(t) {
                return !!t && "object" == typeof t
            }
            e.exports = n
        }, {}],
        27: [function(t, e, o) {
            function n(t) {
                for (var e = u(t), o = e.length, n = o && t.length, c = !!n && a(n) && (r(t) || i(t) || l(t)), f = -1, h = []; ++f < o;) {
                    var d = e[f];
                    (c && s(d, n) || p.call(t, d)) && h.push(d)
                }
                return h
            }
            var i = t("../lang/isArguments"),
                r = t("../lang/isArray"),
                s = t("./isIndex"),
                a = t("./isLength"),
                l = t("../lang/isString"),
                u = t("../object/keysIn"),
                c = Object.prototype,
                p = c.hasOwnProperty;
            e.exports = n
        }, {
            "../lang/isArguments": 29,
            "../lang/isArray": 30,
            "../lang/isString": 35,
            "../object/keysIn": 39,
            "./isIndex": 23,
            "./isLength": 25
        }],
        28: [function(t, e, o) {
            function n(t) {
                if (s.unindexedChars && r(t)) {
                    for (var e = -1, o = t.length, n = Object(t); ++e < o;) n[e] = t.charAt(e);
                    return n
                }
                return i(t) ? t : Object(t)
            }
            var i = t("../lang/isObject"),
                r = t("../lang/isString"),
                s = t("../support");
            e.exports = n
        }, {
            "../lang/isObject": 33,
            "../lang/isString": 35,
            "../support": 41
        }],
        29: [function(t, e, o) {
            function n(t) {
                return r(t) && i(t) && a.call(t, "callee") && !l.call(t, "callee")
            }
            var i = t("../internal/isArrayLike"),
                r = t("../internal/isObjectLike"),
                s = Object.prototype,
                a = s.hasOwnProperty,
                l = s.propertyIsEnumerable;
            e.exports = n
        }, {
            "../internal/isArrayLike": 21,
            "../internal/isObjectLike": 26
        }],
        30: [function(t, e, o) {
            var n = t("../internal/getNative"),
                i = t("../internal/isLength"),
                r = t("../internal/isObjectLike"),
                s = "[object Array]",
                a = Object.prototype,
                l = a.toString,
                u = n(Array, "isArray"),
                c = u || function(t) {
                    return r(t) && i(t.length) && l.call(t) == s
                };
            e.exports = c
        }, {
            "../internal/getNative": 20,
            "../internal/isLength": 25,
            "../internal/isObjectLike": 26
        }],
        31: [function(t, e, o) {
            function n(t) {
                return i(t) && a.call(t) == r
            }
            var i = t("./isObject"),
                r = "[object Function]",
                s = Object.prototype,
                a = s.toString;
            e.exports = n
        }, {
            "./isObject": 33
        }],
        32: [function(t, e, o) {
            function n(t) {
                return null != t && (i(t) ? p.test(u.call(t)) : s(t) && (r(t) ? p : a).test(t))
            }
            var i = t("./isFunction"),
                r = t("../internal/isHostObject"),
                s = t("../internal/isObjectLike"),
                a = /^\[object .+?Constructor\]$/,
                l = Object.prototype,
                u = Function.prototype.toString,
                c = l.hasOwnProperty,
                p = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = n
        }, {
            "../internal/isHostObject": 22,
            "../internal/isObjectLike": 26,
            "./isFunction": 31
        }],
        33: [function(t, e, o) {
            function n(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }
            e.exports = n
        }, {}],
        34: [function(t, e, o) {
            function n(t) {
                var e;
                if (!a(t) || f.call(t) != u || s(t) || r(t) || !p.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e))) return !1;
                var o;
                return l.ownLast ? (i(t, function(t, e, n) {
                    return o = p.call(n, e), !1
                }), o !== !1) : (i(t, function(t, e) {
                    o = e
                }), void 0 === o || p.call(t, o))
            }
            var i = t("../internal/baseForIn"),
                r = t("./isArguments"),
                s = t("../internal/isHostObject"),
                a = t("../internal/isObjectLike"),
                l = t("../support"),
                u = "[object Object]",
                c = Object.prototype,
                p = c.hasOwnProperty,
                f = c.toString;
            e.exports = n
        }, {
            "../internal/baseForIn": 12,
            "../internal/isHostObject": 22,
            "../internal/isObjectLike": 26,
            "../support": 41,
            "./isArguments": 29
        }],
        35: [function(t, e, o) {
            function n(t) {
                return "string" == typeof t || i(t) && a.call(t) == r
            }
            var i = t("../internal/isObjectLike"),
                r = "[object String]",
                s = Object.prototype,
                a = s.toString;
            e.exports = n
        }, {
            "../internal/isObjectLike": 26
        }],
        36: [function(t, e, o) {
            function n(t) {
                return r(t) && i(t.length) && !!S[B.call(t)]
            }
            var i = t("../internal/isLength"),
                r = t("../internal/isObjectLike"),
                s = "[object Arguments]",
                a = "[object Array]",
                l = "[object Boolean]",
                u = "[object Date]",
                c = "[object Error]",
                p = "[object Function]",
                f = "[object Map]",
                h = "[object Number]",
                d = "[object Object]",
                v = "[object RegExp]",
                g = "[object Set]",
                y = "[object String]",
                m = "[object WeakMap]",
                A = "[object ArrayBuffer]",
                b = "[object Float32Array]",
                j = "[object Float64Array]",
                w = "[object Int8Array]",
                k = "[object Int16Array]",
                _ = "[object Int32Array]",
                x = "[object Uint8Array]",
                T = "[object Uint8ClampedArray]",
                E = "[object Uint16Array]",
                C = "[object Uint32Array]",
                S = {};
            S[b] = S[j] = S[w] = S[k] = S[_] = S[x] = S[T] = S[E] = S[C] = !0, S[s] = S[a] = S[A] = S[l] = S[u] = S[c] = S[p] = S[f] = S[h] = S[d] = S[v] = S[g] = S[y] = S[m] = !1;
            var O = Object.prototype,
                B = O.toString;
            e.exports = n
        }, {
            "../internal/isLength": 25,
            "../internal/isObjectLike": 26
        }],
        37: [function(t, e, o) {
            function n(t) {
                return i(t, r(t))
            }
            var i = t("../internal/baseCopy"),
                r = t("../object/keysIn");
            e.exports = n
        }, {
            "../internal/baseCopy": 10,
            "../object/keysIn": 39
        }],
        38: [function(t, e, o) {
            var n = t("../internal/getNative"),
                i = t("../internal/isArrayLike"),
                r = t("../lang/isObject"),
                s = t("../internal/shimKeys"),
                a = t("../support"),
                l = n(Object, "keys"),
                u = l ? function(t) {
                    var e = null == t ? void 0 : t.constructor;
                    return "function" == typeof e && e.prototype === t || ("function" == typeof t ? a.enumPrototypes : i(t)) ? s(t) : r(t) ? l(t) : []
                } : s;
            e.exports = u
        }, {
            "../internal/getNative": 20,
            "../internal/isArrayLike": 21,
            "../internal/shimKeys": 27,
            "../lang/isObject": 33,
            "../support": 41
        }],
        39: [function(t, e, o) {
            function n(t) {
                if (null == t) return [];
                c(t) || (t = Object(t));
                var e = t.length;
                e = e && u(e) && (s(t) || r(t) || p(t)) && e || 0;
                for (var o = t.constructor, n = -1, i = a(o) && o.prototype || _, h = i === t, d = Array(e), v = e > 0, y = f.enumErrorProps && (t === k || t instanceof Error), m = f.enumPrototypes && a(t); ++n < e;) d[n] = n + "";
                for (var b in t) m && "prototype" == b || y && ("message" == b || "name" == b) || v && l(b, e) || "constructor" == b && (h || !T.call(t, b)) || d.push(b);
                if (f.nonEnumShadows && t !== _) {
                    var S = t === x ? j : t === k ? g : E.call(t),
                        O = C[S] || C[A];
                    for (S == A && (i = _), e = w.length; e--;) {
                        b = w[e];
                        var B = O[b];
                        h && B || (B ? !T.call(t, b) : t[b] === i[b]) || d.push(b)
                    }
                }
                return d
            }
            var i = t("../internal/arrayEach"),
                r = t("../lang/isArguments"),
                s = t("../lang/isArray"),
                a = t("../lang/isFunction"),
                l = t("../internal/isIndex"),
                u = t("../internal/isLength"),
                c = t("../lang/isObject"),
                p = t("../lang/isString"),
                f = t("../support"),
                h = "[object Array]",
                d = "[object Boolean]",
                v = "[object Date]",
                g = "[object Error]",
                y = "[object Function]",
                m = "[object Number]",
                A = "[object Object]",
                b = "[object RegExp]",
                j = "[object String]",
                w = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                k = Error.prototype,
                _ = Object.prototype,
                x = String.prototype,
                T = _.hasOwnProperty,
                E = _.toString,
                C = {};
            C[h] = C[v] = C[m] = {
                constructor: !0,
                toLocaleString: !0,
                toString: !0,
                valueOf: !0
            }, C[d] = C[j] = {
                constructor: !0,
                toString: !0,
                valueOf: !0
            }, C[g] = C[y] = C[b] = {
                constructor: !0,
                toString: !0
            }, C[A] = {
                constructor: !0
            }, i(w, function(t) {
                for (var e in C)
                    if (T.call(C, e)) {
                        var o = C[e];
                        o[t] = T.call(o, t)
                    }
            }), e.exports = n
        }, {
            "../internal/arrayEach": 9,
            "../internal/isIndex": 23,
            "../internal/isLength": 25,
            "../lang/isArguments": 29,
            "../lang/isArray": 30,
            "../lang/isFunction": 31,
            "../lang/isObject": 33,
            "../lang/isString": 35,
            "../support": 41
        }],
        40: [function(t, e, o) {
            var n = t("../internal/baseMerge"),
                i = t("../internal/createAssigner"),
                r = i(n);
            e.exports = r
        }, {
            "../internal/baseMerge": 13,
            "../internal/createAssigner": 17
        }],
        41: [function(t, e, o) {
            var n = Array.prototype,
                i = Error.prototype,
                r = Object.prototype,
                s = r.propertyIsEnumerable,
                a = n.splice,
                l = {};
            ! function(t) {
                var e = function() {
                        this.x = t
                    },
                    o = {
                        0: t,
                        length: t
                    },
                    n = [];
                e.prototype = {
                    valueOf: t,
                    y: t
                };
                for (var r in new e) n.push(r);
                l.enumErrorProps = s.call(i, "message") || s.call(i, "name"), l.enumPrototypes = s.call(e, "prototype"), l.nonEnumShadows = !/valueOf/.test(n), l.ownLast = "x" != n[0], l.spliceObjects = (a.call(o, 0, 1), !o[0]), l.unindexedChars = "x" [0] + Object("x")[0] != "xx"
            }(1, 0), e.exports = l
        }, {}],
        42: [function(t, e, o) {
            function n(t) {
                return t
            }
            e.exports = n
        }, {}],
        43: [function(t, e, o) {
            "use strict";
            var n = t("object-keys");
            e.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var t = {},
                    e = Symbol("test");
                if ("string" == typeof e) return !1;
                var o = 42;
                t[e] = o;
                for (e in t) return !1;
                if (0 !== n(t).length) return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                var i = Object.getOwnPropertySymbols(t);
                if (1 !== i.length || i[0] !== e) return !1;
                if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    if (r.value !== o || r.enumerable !== !0) return !1
                }
                return !0
            }
        }, {
            "object-keys": 50
        }],
        44: [function(t, e, o) {
            "use strict";
            var n = t("object-keys"),
                i = t("function-bind"),
                r = function(t) {
                    return "undefined" != typeof t && null !== t
                },
                s = t("./hasSymbols")(),
                a = Object,
                l = i.call(Function.call, Array.prototype.push),
                u = i.call(Function.call, Object.prototype.propertyIsEnumerable);
            e.exports = function(t, e) {
                if (!r(t)) throw new TypeError("target must be an object");
                var o, i, c, p, f, h, d, v = a(t);
                for (o = 1; o < arguments.length; ++o) {
                    if (i = a(arguments[o]), p = n(i), s && Object.getOwnPropertySymbols)
                        for (f = Object.getOwnPropertySymbols(i), c = 0; c < f.length; ++c) d = f[c], u(i, d) && l(p, d);
                    for (c = 0; c < p.length; ++c) d = p[c], h = i[d], u(i, d) && (v[d] = h)
                }
                return v
            }
        }, {
            "./hasSymbols": 43,
            "function-bind": 49,
            "object-keys": 50
        }],
        45: [function(t, e, o) {
            "use strict";
            var n = t("define-properties"),
                i = t("./implementation"),
                r = t("./polyfill"),
                s = t("./shim");
            n(i, {
                implementation: i,
                getPolyfill: r,
                shim: s
            }), e.exports = i
        }, {
            "./implementation": 44,
            "./polyfill": 52,
            "./shim": 53,
            "define-properties": 46
        }],
        46: [function(t, e, o) {
            "use strict";
            var n = t("object-keys"),
                i = t("foreach"),
                r = "function" == typeof Symbol && "symbol" == typeof Symbol(),
                s = Object.prototype.toString,
                a = function(t) {
                    return "function" == typeof t && "[object Function]" === s.call(t)
                },
                l = function() {
                    var t = {};
                    try {
                        Object.defineProperty(t, "x", {
                            enumerable: !1,
                            value: t
                        });
                        for (var e in t) return !1;
                        return t.x === t
                    } catch (o) {
                        return !1
                    }
                },
                u = Object.defineProperty && l(),
                c = function(t, e, o, n) {
                    (!(e in t) || a(n) && n()) && (u ? Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: o,
                        writable: !0
                    }) : t[e] = o)
                },
                p = function(t, e) {
                    var o = arguments.length > 2 ? arguments[2] : {},
                        s = n(e);
                    r && (s = s.concat(Object.getOwnPropertySymbols(e))), i(s, function(n) {
                        c(t, n, e[n], o[n])
                    })
                };
            p.supportsDescriptors = !!u, e.exports = p
        }, {
            foreach: 47,
            "object-keys": 50
        }],
        47: [function(t, e, o) {
            var n = Object.prototype.hasOwnProperty,
                i = Object.prototype.toString;
            e.exports = function(t, e, o) {
                if ("[object Function]" !== i.call(e)) throw new TypeError("iterator must be a function");
                var r = t.length;
                if (r === +r)
                    for (var s = 0; s < r; s++) e.call(o, t[s], s, t);
                else
                    for (var a in t) n.call(t, a) && e.call(o, t[a], a, t)
            }
        }, {}],
        48: [function(t, e, o) {
            var n = "Function.prototype.bind called on incompatible ",
                i = Array.prototype.slice,
                r = Object.prototype.toString,
                s = "[object Function]";
            e.exports = function(t) {
                var e = this;
                if ("function" != typeof e || r.call(e) !== s) throw new TypeError(n + e);
                for (var o, a = i.call(arguments, 1), l = function() {
                        if (this instanceof o) {
                            var n = e.apply(this, a.concat(i.call(arguments)));
                            return Object(n) === n ? n : this
                        }
                        return e.apply(t, a.concat(i.call(arguments)))
                    }, u = Math.max(0, e.length - a.length), c = [], p = 0; p < u; p++) c.push("$" + p);
                if (o = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(l), e.prototype) {
                    var f = function() {};
                    f.prototype = e.prototype, o.prototype = new f, f.prototype = null
                }
                return o
            }
        }, {}],
        49: [function(t, e, o) {
            var n = t("./implementation");
            e.exports = Function.prototype.bind || n
        }, {
            "./implementation": 48
        }],
        50: [function(t, e, o) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                i = Object.prototype.toString,
                r = Array.prototype.slice,
                s = t("./isArguments"),
                a = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                l = function() {}.propertyIsEnumerable("prototype"),
                u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                c = function(t) {
                    var e = t.constructor;
                    return e && e.prototype === t
                },
                p = {
                    $console: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $parent: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0
                },
                f = function() {
                    if ("undefined" == typeof window) return !1;
                    for (var t in window) try {
                        if (!p["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                            c(window[t])
                        } catch (e) {
                            return !0
                        }
                    } catch (e) {
                        return !0
                    }
                    return !1
                }(),
                h = function(t) {
                    if ("undefined" == typeof window || !f) return c(t);
                    try {
                        return c(t)
                    } catch (e) {
                        return !1
                    }
                },
                d = function(t) {
                    var e = null !== t && "object" == typeof t,
                        o = "[object Function]" === i.call(t),
                        r = s(t),
                        c = e && "[object String]" === i.call(t),
                        p = [];
                    if (!e && !o && !r) throw new TypeError("Object.keys called on a non-object");
                    var f = l && o;
                    if (c && t.length > 0 && !n.call(t, 0))
                        for (var d = 0; d < t.length; ++d) p.push(String(d));
                    if (r && t.length > 0)
                        for (var v = 0; v < t.length; ++v) p.push(String(v));
                    else
                        for (var g in t) f && "prototype" === g || !n.call(t, g) || p.push(String(g));
                    if (a)
                        for (var y = h(t), m = 0; m < u.length; ++m) y && "constructor" === u[m] || !n.call(t, u[m]) || p.push(u[m]);
                    return p
                };
            d.shim = function() {
                if (Object.keys) {
                    var t = function() {
                        return 2 === (Object.keys(arguments) || "").length
                    }(1, 2);
                    if (!t) {
                        var e = Object.keys;
                        Object.keys = function(t) {
                            return e(s(t) ? r.call(t) : t)
                        }
                    }
                } else Object.keys = d;
                return Object.keys || d
            }, e.exports = d
        }, {
            "./isArguments": 51
        }],
        51: [function(t, e, o) {
            "use strict";
            var n = Object.prototype.toString;
            e.exports = function(t) {
                var e = n.call(t),
                    o = "[object Arguments]" === e;
                return o || (o = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), o
            }
        }, {}],
        52: [function(t, e, o) {
            "use strict";
            var n = t("./implementation"),
                i = function() {
                    if (!Object.assign) return !1;
                    for (var t = "abcdefghijklmnopqrst", e = t.split(""), o = {}, n = 0; n < e.length; ++n) o[e[n]] = e[n];
                    var i = Object.assign({}, o),
                        r = "";
                    for (var s in i) r += s;
                    return t !== r
                },
                r = function() {
                    if (!Object.assign || !Object.preventExtensions) return !1;
                    var t = Object.preventExtensions({
                        1: 2
                    });
                    try {
                        Object.assign(t, "xy")
                    } catch (e) {
                        return "y" === t[1]
                    }
                };
            e.exports = function() {
                return Object.assign ? i() ? n : r() ? n : Object.assign : n
            }
        }, {
            "./implementation": 44
        }],
        53: [function(t, e, o) {
            "use strict";
            var n = t("define-properties"),
                i = t("./polyfill");
            e.exports = function() {
                var t = i();
                return n(Object, {
                    assign: t
                }, {
                    assign: function() {
                        return Object.assign !== t
                    }
                }), t
            }
        }, {
            "./polyfill": 52,
            "define-properties": 46
        }],
        54: [function(t, e, o) {
            function n(t, e) {
                var o, n = null;
                try {
                    o = JSON.parse(t, e)
                } catch (i) {
                    n = i
                }
                return [n, o]
            }
            e.exports = n
        }, {}],
        55: [function(t, e, o) {
            function n(t) {
                return t.replace(/\n\r?\s*/g, "")
            }
            e.exports = function(t) {
                for (var e = "", o = 0; o < arguments.length; o++) e += n(t[o]) + (arguments[o + 1] || "");
                return e
            }
        }, {}],
        56: [function(t, e, o) {
            "use strict";

            function n(t, e) {
                for (var o = 0; o < t.length; o++) e(t[o])
            }

            function i(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }

            function r(t, e, o) {
                var n = t;
                return p(e) ? (o = e, "string" == typeof t && (n = {
                    uri: t
                })) : n = h(e, {
                    uri: t
                }), n.callback = o, n
            }

            function s(t, e, o) {
                return e = r(t, e, o), a(e)
            }

            function a(t) {
                function e() {
                    4 === u.readyState && r()
                }

                function o() {
                    var t = void 0;
                    if (u.response ? t = u.response : "text" !== u.responseType && u.responseType || (t = u.responseText || u.responseXML), b) try {
                        t = JSON.parse(t)
                    } catch (e) {}
                    return t
                }

                function n(t) {
                    clearTimeout(d), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, a(t, l)
                }

                function r() {
                    if (!h) {
                        var e;
                        clearTimeout(d), e = t.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
                        var n = l,
                            i = null;
                        0 !== e ? (n = {
                            body: o(),
                            statusCode: e,
                            method: g,
                            headers: {},
                            url: v,
                            rawRequest: u
                        }, u.getAllResponseHeaders && (n.headers = f(u.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), a(i, n, n.body)
                    }
                }
                var a = t.callback;
                if ("undefined" == typeof a) throw new Error("callback argument missing");
                a = c(a);
                var l = {
                        body: void 0,
                        headers: {},
                        statusCode: 0,
                        method: g,
                        url: v,
                        rawRequest: u
                    },
                    u = t.xhr || null;
                u || (u = t.cors || t.useXDR ? new s.XDomainRequest : new s.XMLHttpRequest);
                var p, h, d, v = u.url = t.uri || t.url,
                    g = u.method = t.method || "GET",
                    y = t.body || t.data || null,
                    m = u.headers = t.headers || {},
                    A = !!t.sync,
                    b = !1;
                if ("json" in t && (b = !0, m.accept || m.Accept || (m.Accept = "application/json"), "GET" !== g && "HEAD" !== g && (m["content-type"] || m["Content-Type"] || (m["Content-Type"] = "application/json"), y = JSON.stringify(t.json))), u.onreadystatechange = e, u.onload = r, u.onerror = n, u.onprogress = function() {}, u.ontimeout = n, u.open(g, v, !A, t.username, t.password), A || (u.withCredentials = !!t.withCredentials), !A && t.timeout > 0 && (d = setTimeout(function() {
                        h = !0, u.abort("timeout");
                        var t = new Error("XMLHttpRequest timeout");
                        t.code = "ETIMEDOUT", n(t)
                    }, t.timeout)), u.setRequestHeader)
                    for (p in m) m.hasOwnProperty(p) && u.setRequestHeader(p, m[p]);
                else if (t.headers && !i(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in t && (u.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(u), u.send(y), u
            }

            function l() {}
            var u = t("global/window"),
                c = t("once"),
                p = t("is-function"),
                f = t("parse-headers"),
                h = t("xtend");
            e.exports = s, s.XMLHttpRequest = u.XMLHttpRequest || l, s.XDomainRequest = "withCredentials" in new s.XMLHttpRequest ? s.XMLHttpRequest : u.XDomainRequest, n(["get", "put", "post", "patch", "head", "delete"], function(t) {
                s["delete" === t ? "del" : t] = function(e, o, n) {
                    return o = r(e, o, n), o.method = t.toUpperCase(), a(o)
                }
            })
        }, {
            "global/window": 2,
            "is-function": 57,
            once: 58,
            "parse-headers": 61,
            xtend: 62
        }],
        57: [function(t, e, o) {
            function n(t) {
                var e = i.call(t);
                return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
            }
            e.exports = n;
            var i = Object.prototype.toString
        }, {}],
        58: [function(t, e, o) {
            function n(t) {
                var e = !1;
                return function() {
                    if (!e) return e = !0, t.apply(this, arguments)
                }
            }
            e.exports = n, n.proto = n(function() {
                Object.defineProperty(Function.prototype, "once", {
                    value: function() {
                        return n(this)
                    },
                    configurable: !0
                })
            })
        }, {}],
        59: [function(t, e, o) {
            function n(t, e, o) {
                if (!a(e)) throw new TypeError("iterator must be a function");
                arguments.length < 3 && (o = this), "[object Array]" === l.call(t) ? i(t, e, o) : "string" == typeof t ? r(t, e, o) : s(t, e, o)
            }

            function i(t, e, o) {
                for (var n = 0, i = t.length; n < i; n++) u.call(t, n) && e.call(o, t[n], n, t)
            }

            function r(t, e, o) {
                for (var n = 0, i = t.length; n < i; n++) e.call(o, t.charAt(n), n, t)
            }

            function s(t, e, o) {
                for (var n in t) u.call(t, n) && e.call(o, t[n], n, t)
            }
            var a = t("is-function");
            e.exports = n;
            var l = Object.prototype.toString,
                u = Object.prototype.hasOwnProperty
        }, {
            "is-function": 57
        }],
        60: [function(t, e, o) {
            function n(t) {
                return t.replace(/^\s*|\s*$/g, "")
            }
            o = e.exports = n, o.left = function(t) {
                return t.replace(/^\s*/, "")
            }, o.right = function(t) {
                return t.replace(/\s*$/, "")
            }
        }, {}],
        61: [function(t, e, o) {
            var n = t("trim"),
                i = t("for-each"),
                r = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
            e.exports = function(t) {
                if (!t) return {};
                var e = {};
                return i(n(t).split("\n"), function(t) {
                    var o = t.indexOf(":"),
                        i = n(t.slice(0, o)).toLowerCase(),
                        s = n(t.slice(o + 1));
                    "undefined" == typeof e[i] ? e[i] = s : r(e[i]) ? e[i].push(s) : e[i] = [e[i], s]
                }), e
            }
        }, {
            "for-each": 59,
            trim: 60
        }],
        62: [function(t, e, o) {
            function n() {
                for (var t = {}, e = 0; e < arguments.length; e++) {
                    var o = arguments[e];
                    for (var n in o) i.call(o, n) && (t[n] = o[n])
                }
                return t
            }
            e.exports = n;
            var i = Object.prototype.hasOwnProperty
        }, {}],
        63: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("./button.js"),
                a = n(s),
                l = t("./component.js"),
                u = n(l),
                c = function(t) {
                    function e(o, n) {
                        i(this, e), t.call(this, o, n)
                    }
                    return r(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-big-play-button"
                    }, e.prototype.handleClick = function() {
                        this.player_.play()
                    }, e
                }(a["default"]);
            c.prototype.controlText_ = "Play Video", u["default"].registerComponent("BigPlayButton", c), o["default"] = c, e.exports = o["default"]
        }, {
            "./button.js": 64,
            "./component.js": 67
        }],
        64: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("./clickable-component.js"),
                l = i(a),
                u = t("./component"),
                c = i(u),
                p = t("./utils/events.js"),
                f = (n(p), t("./utils/fn.js")),
                h = (n(f), t("./utils/log.js")),
                d = i(h),
                v = t("global/document"),
                g = (i(v), t("object.assign")),
                y = i(g),
                m = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? "button" : arguments[0],
                            e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            o = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        e = y["default"]({
                            className: this.buildCSSClass()
                        }, e), "button" !== t && d["default"].warn("Creating a Button with an HTML element of " + t + " is deprecated; use ClickableComponent instead."), o = y["default"]({
                            type: "button",
                            "aria-live": "polite"
                        }, o);
                        var n = c["default"].prototype.createEl.call(this, t, e, o);
                        return this.createControlTextEl(n), n
                    }, e.prototype.addChild = function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            o = this.constructor.name;
                        return d["default"].warn("Adding an actionable (user controllable) child to a Button (" + o + ") is not supported; use a ClickableComponent instead."), c["default"].prototype.addChild.call(this, t, e)
                    }, e.prototype.handleKeyPress = function(e) {
                        32 === e.which || 13 === e.which || t.prototype.handleKeyPress.call(this, e)
                    }, e
                }(l["default"]);
            c["default"].registerComponent("Button", m), o["default"] = m, e.exports = o["default"]
        }, {
            "./clickable-component.js": 65,
            "./component": 67,
            "./utils/events.js": 133,
            "./utils/fn.js": 134,
            "./utils/log.js": 137,
            "global/document": 1,
            "object.assign": 45
        }],
        65: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("./component"),
                l = i(a),
                u = t("./utils/dom.js"),
                c = n(u),
                p = t("./utils/events.js"),
                f = n(p),
                h = t("./utils/fn.js"),
                d = n(h),
                v = t("./utils/log.js"),
                g = i(v),
                y = t("global/document"),
                m = i(y),
                A = t("object.assign"),
                b = i(A),
                j = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.emitTapEvents(), this.on("tap", this.handleClick), this.on("click", this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? "div" : arguments[0],
                            o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        o = b["default"]({
                            className: this.buildCSSClass(),
                            tabIndex: 0
                        }, o), "button" === e && g["default"].error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), n = b["default"]({
                            role: "button",
                            "aria-live": "polite"
                        }, n);
                        var i = t.prototype.createEl.call(this, e, o, n);
                        return this.createControlTextEl(i), i
                    }, e.prototype.createControlTextEl = function(t) {
                        return this.controlTextEl_ = c.createEl("span", {
                            className: "vjs-control-text"
                        }), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_), this.controlTextEl_
                    }, e.prototype.controlText = function(t) {
                        return t ? (this.controlText_ = t, this.controlTextEl_.innerHTML = this.localize(this.controlText_), this) : this.controlText_ || "Need Text"
                    }, e.prototype.buildCSSClass = function() {
                        return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.addChild = function(e) {
                        var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return t.prototype.addChild.call(this, e, o)
                    }, e.prototype.handleClick = function() {}, e.prototype.handleFocus = function() {
                        f.on(m["default"], "keydown", d.bind(this, this.handleKeyPress))
                    }, e.prototype.handleKeyPress = function(e) {
                        32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleClick(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
                    }, e.prototype.handleBlur = function() {
                        f.off(m["default"], "keydown", d.bind(this, this.handleKeyPress))
                    }, e
                }(l["default"]);
            l["default"].registerComponent("ClickableComponent", j), o["default"] = j, e.exports = o["default"]
        }, {
            "./component": 67,
            "./utils/dom.js": 132,
            "./utils/events.js": 133,
            "./utils/fn.js": 134,
            "./utils/log.js": 137,
            "global/document": 1,
            "object.assign": 45
        }],
        66: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("./button"),
                a = n(s),
                l = t("./component"),
                u = n(l),
                c = function(t) {
                    function e(o, n) {
                        i(this, e), t.call(this, o, n), this.controlText(n && n.controlText || this.localize("Close"))
                    }
                    return r(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.trigger({
                            type: "close",
                            bubbles: !1
                        })
                    }, e
                }(a["default"]);
            u["default"].registerComponent("CloseButton", c), o["default"] = c, e.exports = o["default"]
        }, {
            "./button": 64,
            "./component": 67
        }],
        67: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            o.__esModule = !0;
            var s = t("global/window"),
                a = i(s),
                l = t("./utils/dom.js"),
                u = n(l),
                c = t("./utils/fn.js"),
                p = n(c),
                f = t("./utils/guid.js"),
                h = n(f),
                d = t("./utils/events.js"),
                v = n(d),
                g = t("./utils/log.js"),
                y = i(g),
                m = t("./utils/to-title-case.js"),
                A = i(m),
                b = t("object.assign"),
                j = i(b),
                w = t("./utils/merge-options.js"),
                k = i(w),
                _ = function() {
                    function t(e, o, n) {
                        if (r(this, t), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = k["default"]({}, this.options_), o = this.options_ = k["default"](this.options_, o), this.id_ = o.id || o.el && o.el.id, !this.id_) {
                            var i = e && e.id && e.id() || "no_player";
                            this.id_ = i + "_component_" + h.newGUID()
                        }
                        this.name_ = o.name || null, o.el ? this.el_ = o.el : o.createEl !== !1 && (this.el_ = this.createEl()), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, o.initChildren !== !1 && this.initChildren(), this.ready(n), o.reportTouchActivity !== !1 && this.enableTouchActivity()
                    }
                    return t.prototype.dispose = function() {
                        if (this.trigger({
                                type: "dispose",
                                bubbles: !1
                            }), this.children_)
                            for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
                        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), u.removeElData(this.el_), this.el_ = null
                    }, t.prototype.player = function() {
                        return this.player_
                    }, t.prototype.options = function(t) {
                        return y["default"].warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = k["default"](this.options_, t), this.options_) : this.options_
                    }, t.prototype.el = function() {
                        return this.el_
                    }, t.prototype.createEl = function(t, e, o) {
                        return u.createEl(t, e, o)
                    }, t.prototype.localize = function(t) {
                        var e = this.player_.language && this.player_.language(),
                            o = this.player_.languages && this.player_.languages();
                        if (!e || !o) return t;
                        var n = o[e];
                        if (n && n[t]) return n[t];
                        var i = e.split("-")[0],
                            r = o[i];
                        return r && r[t] ? r[t] : t
                    }, t.prototype.contentEl = function() {
                        return this.contentEl_ || this.el_
                    }, t.prototype.id = function() {
                        return this.id_
                    }, t.prototype.name = function() {
                        return this.name_
                    }, t.prototype.children = function() {
                        return this.children_
                    }, t.prototype.getChildById = function(t) {
                        return this.childIndex_[t]
                    }, t.prototype.getChild = function(t) {
                        return this.childNameIndex_[t]
                    }, t.prototype.addChild = function(e) {
                        var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            n = arguments.length <= 2 || void 0 === arguments[2] ? this.children_.length : arguments[2],
                            i = void 0,
                            r = void 0;
                        if ("string" == typeof e) {
                            r = e, o || (o = {}), o === !0 && (y["default"].warn("Initializing a child component with `true` is deprecated. Children should be defined in an array when possible, but if necessary use an object instead of `true`."), o = {});
                            var s = o.componentClass || A["default"](r);
                            o.name = r;
                            var a = t.getComponent(s);
                            if (!a) throw new Error("Component " + s + " does not exist");
                            if ("function" != typeof a) return null;
                            i = new a(this.player_ || this, o)
                        } else i = e;
                        if (this.children_.splice(n, 0, i), "function" == typeof i.id && (this.childIndex_[i.id()] = i), r = r || i.name && i.name(), r && (this.childNameIndex_[r] = i), "function" == typeof i.el && i.el()) {
                            var l = this.contentEl().children,
                                u = l[n] || null;
                            this.contentEl().insertBefore(i.el(), u)
                        }
                        return i
                    }, t.prototype.removeChild = function(t) {
                        if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
                            for (var e = !1, o = this.children_.length - 1; o >= 0; o--)
                                if (this.children_[o] === t) {
                                    e = !0, this.children_.splice(o, 1);
                                    break
                                }
                            if (e) {
                                this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                                var n = t.el();
                                n && n.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                            }
                        }
                    }, t.prototype.initChildren = function() {
                        var e = this,
                            o = this.options_.children;
                        o && ! function() {
                            var n = e.options_,
                                i = function(t) {
                                    var o = t.name,
                                        i = t.opts;
                                    if (void 0 !== n[o] && (i = n[o]), i !== !1) {
                                        i === !0 && (i = {}), i.playerOptions = e.options_.playerOptions;
                                        var r = e.addChild(o, i);
                                        r && (e[o] = r)
                                    }
                                },
                                r = void 0,
                                s = t.getComponent("Tech");
                            r = Array.isArray(o) ? o : Object.keys(o), r.concat(Object.keys(e.options_).filter(function(t) {
                                return !r.some(function(e) {
                                    return "string" == typeof e ? t === e : t === e.name
                                })
                            })).map(function(t) {
                                var n = void 0,
                                    i = void 0;
                                return "string" == typeof t ? (n = t, i = o[n] || e.options_[n] || {}) : (n = t.name, i = t), {
                                    name: n,
                                    opts: i
                                }
                            }).filter(function(e) {
                                var o = t.getComponent(e.opts.componentClass || A["default"](e.name));
                                return o && !s.isTech(o)
                            }).forEach(i)
                        }()
                    }, t.prototype.buildCSSClass = function() {
                        return ""
                    }, t.prototype.on = function(t, e, o) {
                        var n = this;
                        return "string" == typeof t || Array.isArray(t) ? v.on(this.el_, t, p.bind(this, e)) : ! function() {
                            var i = t,
                                r = e,
                                s = p.bind(n, o),
                                a = function() {
                                    return n.off(i, r, s)
                                };
                            a.guid = s.guid, n.on("dispose", a);
                            var l = function() {
                                return n.off("dispose", a)
                            };
                            l.guid = s.guid, t.nodeName ? (v.on(i, r, s), v.on(i, "dispose", l)) : "function" == typeof t.on && (i.on(r, s), i.on("dispose", l))
                        }(), this
                    }, t.prototype.off = function(t, e, o) {
                        if (!t || "string" == typeof t || Array.isArray(t)) v.off(this.el_, t, e);
                        else {
                            var n = t,
                                i = e,
                                r = p.bind(this, o);
                            this.off("dispose", r), t.nodeName ? (v.off(n, i, r), v.off(n, "dispose", r)) : (n.off(i, r), n.off("dispose", r))
                        }
                        return this
                    }, t.prototype.one = function(t, e, o) {
                        var n = this,
                            i = arguments;
                        return "string" == typeof t || Array.isArray(t) ? v.one(this.el_, t, p.bind(this, e)) : ! function() {
                            var r = t,
                                s = e,
                                a = p.bind(n, o),
                                l = function u() {
                                    n.off(r, s, u), a.apply(null, i)
                                };
                            l.guid = a.guid, n.on(r, s, l)
                        }(), this
                    }, t.prototype.trigger = function(t, e) {
                        return v.trigger(this.el_, t, e), this
                    }, t.prototype.ready = function(t) {
                        var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                        return t && (this.isReady_ ? e ? t.call(this) : this.setTimeout(t, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(t))), this
                    }, t.prototype.triggerReady = function() {
                        this.isReady_ = !0, this.setTimeout(function() {
                            var t = this.readyQueue_;
                            this.readyQueue_ = [], t && t.length > 0 && t.forEach(function(t) {
                                t.call(this)
                            }, this), this.trigger("ready")
                        }, 1)
                    }, t.prototype.$ = function(t, e) {
                        return u.$(t, e || this.contentEl())
                    }, t.prototype.$$ = function(t, e) {
                        return u.$$(t, e || this.contentEl())
                    }, t.prototype.hasClass = function(t) {
                        return u.hasElClass(this.el_, t)
                    }, t.prototype.addClass = function(t) {
                        return u.addElClass(this.el_, t), this
                    }, t.prototype.removeClass = function(t) {
                        return u.removeElClass(this.el_, t), this
                    }, t.prototype.toggleClass = function(t, e) {
                        return u.toggleElClass(this.el_, t, e), this
                    }, t.prototype.show = function() {
                        return this.removeClass("vjs-hidden"), this
                    }, t.prototype.hide = function() {
                        return this.addClass("vjs-hidden"), this
                    }, t.prototype.lockShowing = function() {
                        return this.addClass("vjs-lock-showing"), this
                    }, t.prototype.unlockShowing = function() {
                        return this.removeClass("vjs-lock-showing"), this
                    }, t.prototype.width = function(t, e) {
                        return this.dimension("width", t, e)
                    }, t.prototype.height = function(t, e) {
                        return this.dimension("height", t, e)
                    }, t.prototype.dimensions = function(t, e) {
                        return this.width(t, !0).height(e)
                    }, t.prototype.dimension = function(t, e, o) {
                        if (void 0 !== e) return null !== e && e === e || (e = 0), ("" + e).indexOf("%") !== -1 || ("" + e).indexOf("px") !== -1 ? this.el_.style[t] = e : "auto" === e ? this.el_.style[t] = "" : this.el_.style[t] = e + "px", o || this.trigger("resize"), this;
                        if (!this.el_) return 0;
                        var n = this.el_.style[t],
                            i = n.indexOf("px");
                        return i !== -1 ? parseInt(n.slice(0, i), 10) : parseInt(this.el_["offset" + A["default"](t)], 10)
                    }, t.prototype.emitTapEvents = function() {
                        var t = 0,
                            e = null,
                            o = 10,
                            n = 200,
                            i = void 0;
                        this.on("touchstart", function(o) {
                            1 === o.touches.length && (e = j["default"]({}, o.touches[0]), t = (new Date).getTime(), i = !0)
                        }), this.on("touchmove", function(t) {
                            if (t.touches.length > 1) i = !1;
                            else if (e) {
                                var n = t.touches[0].pageX - e.pageX,
                                    r = t.touches[0].pageY - e.pageY,
                                    s = Math.sqrt(n * n + r * r);
                                s > o && (i = !1)
                            }
                        });
                        var r = function() {
                            i = !1
                        };
                        this.on("touchleave", r), this.on("touchcancel", r), this.on("touchend", function(o) {
                            if (e = null, i === !0) {
                                var r = (new Date).getTime() - t;
                                r < n && (o.preventDefault(), this.trigger("tap"))
                            }
                        })
                    }, t.prototype.enableTouchActivity = function() {
                        if (this.player() && this.player().reportUserActivity) {
                            var t = p.bind(this.player(), this.player().reportUserActivity),
                                e = void 0;
                            this.on("touchstart", function() {
                                t(), this.clearInterval(e), e = this.setInterval(t, 250)
                            });
                            var o = function(o) {
                                t(), this.clearInterval(e)
                            };
                            this.on("touchmove", t), this.on("touchend", o), this.on("touchcancel", o)
                        }
                    }, t.prototype.setTimeout = function(t, e) {
                        t = p.bind(this, t);
                        var o = a["default"].setTimeout(t, e),
                            n = function() {
                                this.clearTimeout(o)
                            };
                        return n.guid = "vjs-timeout-" + o, this.on("dispose", n), o
                    }, t.prototype.clearTimeout = function(t) {
                        a["default"].clearTimeout(t);
                        var e = function() {};
                        return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
                    }, t.prototype.setInterval = function(t, e) {
                        t = p.bind(this, t);
                        var o = a["default"].setInterval(t, e),
                            n = function() {
                                this.clearInterval(o)
                            };
                        return n.guid = "vjs-interval-" + o, this.on("dispose", n), o
                    }, t.prototype.clearInterval = function(t) {
                        a["default"].clearInterval(t);
                        var e = function() {};
                        return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
                    }, t.registerComponent = function(e, o) {
                        return t.components_ || (t.components_ = {}), t.components_[e] = o, o
                    }, t.getComponent = function(e) {
                        return t.components_ && t.components_[e] ? t.components_[e] : a["default"] && a["default"].videojs && a["default"].videojs[e] ? (y["default"].warn("The " + e + " component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"), a["default"].videojs[e]) : void 0
                    }, t.extend = function(e) {
                        e = e || {}, y["default"].warn("Component.extend({}) has been deprecated, use videojs.extend(Component, {}) instead");
                        var o = e.init || e.init || this.prototype.init || this.prototype.init || function() {},
                            n = function() {
                                o.apply(this, arguments)
                            };
                        n.prototype = Object.create(this.prototype), n.prototype.constructor = n, n.extend = t.extend;
                        for (var i in e) e.hasOwnProperty(i) && (n.prototype[i] = e[i]);
                        return n
                    }, t
                }();
            _.registerComponent("Component", _), o["default"] = _, e.exports = o["default"]
        }, {
            "./utils/dom.js": 132,
            "./utils/events.js": 133,
            "./utils/fn.js": 134,
            "./utils/guid.js": 136,
            "./utils/log.js": 137,
            "./utils/merge-options.js": 138,
            "./utils/to-title-case.js": 141,
            "global/window": 2,
            "object.assign": 45
        }],
        68: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../component.js"),
                a = n(s),
                l = t("./play-toggle.js"),
                u = (n(l), t("./time-controls/current-time-display.js")),
                c = (n(u), t("./time-controls/duration-display.js")),
                p = (n(c), t("./time-controls/time-divider.js")),
                f = (n(p), t("./time-controls/remaining-time-display.js")),
                h = (n(f), t("./live-display.js")),
                d = (n(h), t("./progress-control/progress-control.js")),
                v = (n(d), t("./fullscreen-toggle.js")),
                g = (n(v), t("./volume-control/volume-control.js")),
                y = (n(g), t("./volume-menu-button.js")),
                m = (n(y), t("./mute-toggle.js")),
                A = (n(m), t("./text-track-controls/chapters-button.js")),
                b = (n(A), t("./text-track-controls/subtitles-button.js")),
                j = (n(b), t("./text-track-controls/captions-button.js")),
                w = (n(j), t("./playback-rate-menu/playback-rate-menu-button.js")),
                k = (n(w), t("./spacer-controls/custom-control-spacer.js")),
                _ = (n(k), function(t) {
                    function e() {
                        i(this, e), t.apply(this, arguments)
                    }
                    return r(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-control-bar",
                            dir: "ltr"
                        }, {
                            role: "group"
                        })
                    }, e
                }(a["default"]));
            _.prototype.options_ = {
                loadEvent: "play",
                children: ["playToggle", "volumeMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "subtitlesButton", "captionsButton", "fullscreenToggle"]
            }, a["default"].registerComponent("ControlBar", _), o["default"] = _, e.exports = o["default"]
        }, {
            "../component.js": 67,
            "./fullscreen-toggle.js": 69,
            "./live-display.js": 70,
            "./mute-toggle.js": 71,
            "./play-toggle.js": 72,
            "./playback-rate-menu/playback-rate-menu-button.js": 73,
            "./progress-control/progress-control.js": 78,
            "./spacer-controls/custom-control-spacer.js": 80,
            "./text-track-controls/captions-button.js": 83,
            "./text-track-controls/chapters-button.js": 84,
            "./text-track-controls/subtitles-button.js": 87,
            "./time-controls/current-time-display.js": 90,
            "./time-controls/duration-display.js": 91,
            "./time-controls/remaining-time-display.js": 92,
            "./time-controls/time-divider.js": 93,
            "./volume-control/volume-control.js": 95,
            "./volume-menu-button.js": 97
        }],
        69: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../button.js"),
                a = n(s),
                l = t("../component.js"),
                u = n(l),
                c = function(t) {
                    function e() {
                        i(this, e), t.apply(this, arguments)
                    }
                    return r(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.player_.isFullscreen() ? (this.player_.exitFullscreen(), this.controlText("Fullscreen")) : (this.player_.requestFullscreen(), this.controlText("Non-Fullscreen"))
                    }, e
                }(a["default"]);
            c.prototype.controlText_ = "Fullscreen", u["default"].registerComponent("FullscreenToggle", c), o["default"] = c, e.exports = o["default"]
        }, {
            "../button.js": 64,
            "../component.js": 67
        }],
        70: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../component"),
                l = i(a),
                u = t("../utils/dom.js"),
                c = n(u),
                p = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.updateShowing(), this.on(this.player(), "durationchange", this.updateShowing)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-live-control vjs-control"
                        });
                        return this.contentEl_ = c.createEl("div", {
                            className: "vjs-live-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateShowing = function() {
                        this.player().duration() === 1 / 0 ? this.show() : this.hide()
                    }, e
                }(l["default"]);
            l["default"].registerComponent("LiveDisplay", p), o["default"] = p, e.exports = o["default"]
        }, {
            "../component": 67,
            "../utils/dom.js": 132
        }],
        71: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../button"),
                l = i(a),
                u = t("../component"),
                c = i(u),
                p = t("../utils/dom.js"),
                f = n(p),
                h = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.on(o, "volumechange", this.update), o.tech_ && o.tech_.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), this.on(o, "loadstart", function() {
                            this.update(), o.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        })
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.player_.muted(!this.player_.muted())
                    }, e.prototype.update = function() {
                        var t = this.player_.volume(),
                            e = 3;
                        0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2);
                        var o = this.player_.muted() ? "Unmute" : "Mute";
                        this.controlText() !== o && this.controlText(o);
                        for (var n = 0; n < 4; n++) f.removeElClass(this.el_, "vjs-vol-" + n);
                        f.addElClass(this.el_, "vjs-vol-" + e)
                    }, e
                }(l["default"]);
            h.prototype.controlText_ = "Mute", c["default"].registerComponent("MuteToggle", h), o["default"] = h, e.exports = o["default"]
        }, {
            "../button": 64,
            "../component": 67,
            "../utils/dom.js": 132
        }],
        72: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../button.js"),
                a = n(s),
                l = t("../component.js"),
                u = n(l),
                c = function(t) {
                    function e(o, n) {
                        i(this, e), t.call(this, o, n), this.on(o, "play", this.handlePlay), this.on(o, "pause", this.handlePause)
                    }
                    return r(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, e.prototype.handlePlay = function() {
                        this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                    }, e.prototype.handlePause = function() {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                    }, e
                }(a["default"]);
            c.prototype.controlText_ = "Play", u["default"].registerComponent("PlayToggle", c), o["default"] = c, e.exports = o["default"]
        }, {
            "../button.js": 64,
            "../component.js": 67
        }],
        73: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../menu/menu-button.js"),
                l = i(a),
                u = t("../../menu/menu.js"),
                c = i(u),
                p = t("./playback-rate-menu-item.js"),
                f = i(p),
                h = t("../../component.js"),
                d = i(h),
                v = t("../../utils/dom.js"),
                g = n(v),
                y = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.updateVisibility(), this.updateLabel(), this.on(o, "loadstart", this.updateVisibility), this.on(o, "ratechange", this.updateLabel)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this);
                        return this.labelEl_ = g.createEl("div", {
                            className: "vjs-playback-rate-value",
                            innerHTML: 1
                        }), e.appendChild(this.labelEl_), e
                    }, e.prototype.buildCSSClass = function() {
                        return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createMenu = function() {
                        var t = new c["default"](this.player()),
                            e = this.playbackRates();
                        if (e)
                            for (var o = e.length - 1; o >= 0; o--) t.addChild(new f["default"](this.player(), {
                                rate: e[o] + "x"
                            }));
                        return t
                    }, e.prototype.updateARIAAttributes = function() {
                        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                    }, e.prototype.handleClick = function() {
                        for (var t = this.player().playbackRate(), e = this.playbackRates(), o = e[0], n = 0; n < e.length; n++)
                            if (e[n] > t) {
                                o = e[n];
                                break
                            }
                        this.player().playbackRate(o)
                    }, e.prototype.playbackRates = function() {
                        return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                    }, e.prototype.playbackRateSupported = function() {
                        return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                    }, e.prototype.updateVisibility = function() {
                        this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                    }, e.prototype.updateLabel = function() {
                        this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                    }, e
                }(l["default"]);
            y.prototype.controlText_ = "Playback Rate", d["default"].registerComponent("PlaybackRateMenuButton", y), o["default"] = y, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../menu/menu-button.js": 104,
            "../../menu/menu.js": 106,
            "../../utils/dom.js": 132,
            "./playback-rate-menu-item.js": 74
        }],
        74: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../../menu/menu-item.js"),
                a = n(s),
                l = t("../../component.js"),
                u = n(l),
                c = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = n.rate,
                            s = parseFloat(r, 10);
                        n.label = r, n.selected = 1 === s, t.call(this, o, n), this.label = r, this.rate = s, this.on(o, "ratechange", this.update)
                    }
                    return r(e, t), e.prototype.handleClick = function() {
                        t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                    }, e.prototype.update = function() {
                        this.selected(this.player().playbackRate() === this.rate)
                    }, e
                }(a["default"]);
            c.prototype.contentElType = "button", u["default"].registerComponent("PlaybackRateMenuItem", c), o["default"] = c, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../menu/menu-item.js": 105
        }],
        75: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../component.js"),
                l = i(a),
                u = t("../../utils/dom.js"),
                c = n(u),
                p = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.on(o, "progress", this.update)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-load-progress",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                        })
                    }, e.prototype.update = function() {
                        var t = this.player_.buffered(),
                            e = this.player_.duration(),
                            o = this.player_.bufferedEnd(),
                            n = this.el_.children,
                            i = function(t, e) {
                                var o = t / e || 0;
                                return 100 * (o >= 1 ? 1 : o) + "%"
                            };
                        this.el_.style.width = i(o, e);
                        for (var r = 0; r < t.length; r++) {
                            var s = t.start(r),
                                a = t.end(r),
                                l = n[r];
                            l || (l = this.el_.appendChild(c.createEl())), l.style.left = i(s, o), l.style.width = i(a - s, o)
                        }
                        for (var r = n.length; r > t.length; r--) this.el_.removeChild(n[r - 1])
                    }, e
                }(l["default"]);
            l["default"].registerComponent("LoadProgressBar", p), o["default"] = p, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../utils/dom.js": 132
        }],
        76: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../component.js"),
                l = i(a),
                u = t("../../utils/dom.js"),
                c = n(u),
                p = t("../../utils/fn.js"),
                f = n(p),
                h = t("../../utils/format-time.js"),
                d = i(h),
                v = t("lodash-compat/function/throttle"),
                g = i(v),
                y = function(t) {
                    function e(o, n) {
                        var i = this;
                        r(this, e), t.call(this, o, n), this.update(0, 0), o.on("ready", function() {
                            i.on(o.controlBar.progressControl.el(), "mousemove", g["default"](f.bind(i, i.handleMouseMove), 25))
                        })
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-mouse-display"
                        })
                    }, e.prototype.handleMouseMove = function(t) {
                        var e = this.player_.duration(),
                            o = this.calculateDistance(t) * e,
                            n = t.pageX - c.findElPosition(this.el().parentNode).left;
                        this.update(o, n)
                    }, e.prototype.update = function(t, e) {
                        var o = d["default"](t, this.player_.duration());
                        this.el().style.left = e + "px", this.el().setAttribute("data-current-time", o)
                    }, e.prototype.calculateDistance = function(t) {
                        return c.getPointerPosition(this.el().parentNode, t).x
                    }, e
                }(l["default"]);
            l["default"].registerComponent("MouseTimeDisplay", y), o["default"] = y, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../utils/dom.js": 132,
            "../../utils/fn.js": 134,
            "../../utils/format-time.js": 135,
            "lodash-compat/function/throttle": 7
        }],
        77: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../component.js"),
                l = i(a),
                u = t("../../utils/fn.js"),
                c = n(u),
                p = t("../../utils/format-time.js"),
                f = i(p),
                h = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.updateDataAttr(), this.on(o, "timeupdate", this.updateDataAttr), o.ready(c.bind(this, this.updateDataAttr))
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-play-progress vjs-slider-bar",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                        })
                    }, e.prototype.updateDataAttr = function() {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                        this.el_.setAttribute("data-current-time", f["default"](t, this.player_.duration()))
                    }, e
                }(l["default"]);
            l["default"].registerComponent("PlayProgressBar", h), o["default"] = h, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../utils/fn.js": 134,
            "../../utils/format-time.js": 135
        }],
        78: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../../component.js"),
                a = n(s),
                l = t("./seek-bar.js"),
                u = (n(l), t("./mouse-time-display.js")),
                c = (n(u), function(t) {
                    function e() {
                        i(this, e), t.apply(this, arguments)
                    }
                    return r(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-progress-control vjs-control"
                        })
                    }, e
                }(a["default"]));
            c.prototype.options_ = {
                children: ["seekBar"]
            }, a["default"].registerComponent("ProgressControl", c), o["default"] = c, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "./mouse-time-display.js": 76,
            "./seek-bar.js": 79
        }],
        79: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../slider/slider.js"),
                l = i(a),
                u = t("../../component.js"),
                c = i(u),
                p = t("./load-progress-bar.js"),
                f = (i(p), t("./play-progress-bar.js")),
                h = (i(f), t("../../utils/fn.js")),
                d = n(h),
                v = t("../../utils/format-time.js"),
                g = i(v),
                y = t("object.assign"),
                m = (i(y), function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.on(o, "timeupdate", this.updateARIAAttributes), o.ready(d.bind(this, this.updateARIAAttributes))
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-progress-holder"
                        }, {
                            "aria-label": "video progress bar"
                        })
                    }, e.prototype.updateARIAAttributes = function() {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                        this.el_.setAttribute("aria-valuenow", (100 * this.getPercent()).toFixed(2)), this.el_.setAttribute("aria-valuetext", g["default"](t, this.player_.duration()))
                    }, e.prototype.getPercent = function() {
                        var t = this.player_.currentTime() / this.player_.duration();
                        return t >= 1 ? 1 : t
                    }, e.prototype.handleMouseDown = function(e) {
                        t.prototype.handleMouseDown.call(this, e), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
                    }, e.prototype.handleMouseMove = function(t) {
                        var e = this.calculateDistance(t) * this.player_.duration();
                        e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
                    }, e.prototype.handleMouseUp = function(e) {
                        t.prototype.handleMouseUp.call(this, e), this.player_.scrubbing(!1), this.videoWasPlaying && this.player_.play()
                    }, e.prototype.stepForward = function() {
                        this.player_.currentTime(this.player_.currentTime() + 5)
                    }, e.prototype.stepBack = function() {
                        this.player_.currentTime(this.player_.currentTime() - 5)
                    }, e
                }(l["default"]));
            m.prototype.options_ = {
                children: ["loadProgressBar", "mouseTimeDisplay", "playProgressBar"],
                barName: "playProgressBar"
            }, m.prototype.playerEvent = "timeupdate", c["default"].registerComponent("SeekBar", m), o["default"] = m, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../slider/slider.js": 114,
            "../../utils/fn.js": 134,
            "../../utils/format-time.js": 135,
            "./load-progress-bar.js": 75,
            "./play-progress-bar.js": 77,
            "object.assign": 45
        }],
        80: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("./spacer.js"),
                a = n(s),
                l = t("../../component.js"),
                u = n(l),
                c = function(t) {
                    function e() {
                        i(this, e), t.apply(this, arguments)
                    }
                    return r(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, {
                            className: this.buildCSSClass()
                        });
                        return e.innerHTML = "&nbsp;", e
                    }, e
                }(a["default"]);
            u["default"].registerComponent("CustomControlSpacer", c), o["default"] = c, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "./spacer.js": 81
        }],
        81: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../../component.js"),
                a = n(s),
                l = function(t) {
                    function e() {
                        i(this, e), t.apply(this, arguments)
                    }
                    return r(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, e
                }(a["default"]);
            a["default"].registerComponent("Spacer", l), o["default"] = l, e.exports = o["default"]
        }, {
            "../../component.js": 67
        }],
        82: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("./text-track-menu-item.js"),
                a = n(s),
                l = t("../../component.js"),
                u = n(l),
                c = function(t) {
                    function e(o, n) {
                        i(this, e), n.track = {
                            kind: n.kind,
                            player: o,
                            label: n.kind + " settings",
                            selectable: !1,
                            "default": !1,
                            mode: "disabled"
                        }, n.selectable = !1, t.call(this, o, n), this.addClass("vjs-texttrack-settings"), this.controlText(", opens " + n.kind + " settings dialog")
                    }
                    return r(e, t), e.prototype.handleClick = function() {
                        this.player().getChild("textTrackSettings").show(), this.player().getChild("textTrackSettings").el_.focus()
                    }, e
                }(a["default"]);
            u["default"].registerComponent("CaptionSettingsMenuItem", c), o["default"] = c, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "./text-track-menu-item.js": 89
        }],
        83: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("./text-track-button.js"),
                a = n(s),
                l = t("../../component.js"),
                u = n(l),
                c = t("./caption-settings-menu-item.js"),
                p = n(c),
                f = function(t) {
                    function e(o, n, r) {
                        i(this, e), t.call(this, o, n, r), this.el_.setAttribute("aria-label", "Captions Menu")
                    }
                    return r(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.update = function() {
                        var e = 2;
                        t.prototype.update.call(this), this.player().tech_ && this.player().tech_.featuresNativeTextTracks && (e = 1), this.items && this.items.length > e ? this.show() : this.hide()
                    }, e.prototype.createItems = function() {
                        var e = [];
                        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || e.push(new p["default"](this.player_, {
                            kind: this.kind_
                        })), t.prototype.createItems.call(this, e)
                    }, e
                }(a["default"]);
            f.prototype.kind_ = "captions", f.prototype.controlText_ = "Captions", u["default"].registerComponent("CaptionsButton", f), o["default"] = f, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "./caption-settings-menu-item.js": 82,
            "./text-track-button.js": 88
        }],
        84: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("./text-track-button.js"),
                l = i(a),
                u = t("../../component.js"),
                c = i(u),
                p = t("./text-track-menu-item.js"),
                f = i(p),
                h = t("./chapters-track-menu-item.js"),
                d = i(h),
                v = t("../../menu/menu.js"),
                g = i(v),
                y = t("../../utils/dom.js"),
                m = n(y),
                A = t("../../utils/fn.js"),
                b = (n(A), t("../../utils/to-title-case.js")),
                j = i(b),
                w = t("global/window"),
                k = (i(w), function(t) {
                    function e(o, n, i) {
                        r(this, e), t.call(this, o, n, i), this.el_.setAttribute("aria-label", "Chapters Menu")
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createItems = function() {
                        var t = [],
                            e = this.player_.textTracks();
                        if (!e) return t;
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.kind === this.kind_ && t.push(new f["default"](this.player_, {
                                track: n
                            }))
                        }
                        return t
                    }, e.prototype.createMenu = function() {
                        for (var t = this, e = this.player_.textTracks() || [], o = void 0, n = this.items = [], i = 0, r = e.length; i < r; i++) {
                            var s = e[i];
                            if (s.kind === this.kind_) {
                                o = s;
                                break
                            }
                        }
                        var a = this.menu;
                        if (void 0 === a) {
                            a = new g["default"](this.player_);
                            var l = m.createEl("li", {
                                className: "vjs-menu-title",
                                innerHTML: j["default"](this.kind_),
                                tabIndex: -1
                            });
                            a.children_.unshift(l), m.insertElFirst(l, a.contentEl())
                        }
                        if (o && null == o.cues) {
                            o.mode = "hidden";
                            var u = this.player_.remoteTextTrackEls().getTrackElementByTrack_(o);
                            u && u.addEventListener("load", function(e) {
                                return t.update()
                            })
                        }
                        if (o && o.cues && o.cues.length > 0) {
                            for (var c = o.cues, p = void 0, i = 0, f = c.length; i < f; i++) {
                                p = c[i];
                                var h = new d["default"](this.player_, {
                                    track: o,
                                    cue: p
                                });
                                n.push(h), a.addChild(h)
                            }
                            this.addChild(a)
                        }
                        return this.items.length > 0 && this.show(), a
                    }, e
                }(l["default"]));
            k.prototype.kind_ = "chapters", k.prototype.controlText_ = "Chapters", c["default"].registerComponent("ChaptersButton", k), o["default"] = k, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../menu/menu.js": 106,
            "../../utils/dom.js": 132,
            "../../utils/fn.js": 134,
            "../../utils/to-title-case.js": 141,
            "./chapters-track-menu-item.js": 85,
            "./text-track-button.js": 88,
            "./text-track-menu-item.js": 89,
            "global/window": 2
        }],
        85: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../menu/menu-item.js"),
                l = i(a),
                u = t("../../component.js"),
                c = i(u),
                p = t("../../utils/fn.js"),
                f = n(p),
                h = function(t) {
                    function e(o, n) {
                        r(this, e);
                        var i = n.track,
                            s = n.cue,
                            a = o.currentTime();
                        n.label = s.text, n.selected = s.startTime <= a && a < s.endTime, t.call(this, o, n), this.track = i, this.cue = s, i.addEventListener("cuechange", f.bind(this, this.update))
                    }
                    return s(e, t), e.prototype.handleClick = function() {
                        t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                    }, e.prototype.update = function() {
                        var t = this.cue,
                            e = this.player_.currentTime();
                        this.selected(t.startTime <= e && e < t.endTime)
                    }, e
                }(l["default"]);
            c["default"].registerComponent("ChaptersTrackMenuItem", h), o["default"] = h, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../menu/menu-item.js": 105,
            "../../utils/fn.js": 134
        }],
        86: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("./text-track-menu-item.js"),
                a = n(s),
                l = t("../../component.js"),
                u = n(l),
                c = function(t) {
                    function e(o, n) {
                        i(this, e), n.track = {
                            kind: n.kind,
                            player: o,
                            label: n.kind + " off",
                            "default": !1,
                            mode: "disabled"
                        }, n.selectable = !0, t.call(this, o, n), this.selected(!0)
                    }
                    return r(e, t), e.prototype.handleTracksChange = function(t) {
                        for (var e = this.player().textTracks(), o = !0, n = 0, i = e.length; n < i; n++) {
                            var r = e[n];
                            if (r.kind === this.track.kind && "showing" === r.mode) {
                                o = !1;
                                break
                            }
                        }
                        this.selected(o)
                    }, e
                }(a["default"]);
            u["default"].registerComponent("OffTextTrackMenuItem", c), o["default"] = c, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "./text-track-menu-item.js": 89
        }],
        87: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("./text-track-button.js"),
                a = n(s),
                l = t("../../component.js"),
                u = n(l),
                c = function(t) {
                    function e(o, n, r) {
                        i(this, e), t.call(this, o, n, r), this.el_.setAttribute("aria-label", "Subtitles Menu")
                    }
                    return r(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
                    }, e
                }(a["default"]);
            c.prototype.kind_ = "subtitles", c.prototype.controlText_ = "Subtitles", u["default"].registerComponent("SubtitlesButton", c), o["default"] = c, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "./text-track-button.js": 88
        }],
        88: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../menu/menu-button.js"),
                l = i(a),
                u = t("../../component.js"),
                c = i(u),
                p = t("../../utils/fn.js"),
                f = n(p),
                h = t("./text-track-menu-item.js"),
                d = i(h),
                v = t("./off-text-track-menu-item.js"),
                g = i(v),
                y = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n);
                        var i = this.player_.textTracks();
                        if (this.items.length <= 1 && this.hide(), i) {
                            var s = f.bind(this, this.update);
                            i.addEventListener("removetrack", s), i.addEventListener("addtrack", s), this.player_.on("dispose", function() {
                                i.removeEventListener("removetrack", s), i.removeEventListener("addtrack", s)
                            })
                        }
                    }
                    return s(e, t), e.prototype.createItems = function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                        t.push(new g["default"](this.player_, {
                            kind: this.kind_
                        }));
                        var e = this.player_.textTracks();
                        if (!e) return t;
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.kind === this.kind_ && t.push(new d["default"](this.player_, {
                                selectable: !0,
                                track: n
                            }))
                        }
                        return t
                    }, e
                }(l["default"]);
            c["default"].registerComponent("TextTrackButton", y), o["default"] = y, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../menu/menu-button.js": 104,
            "../../utils/fn.js": 134,
            "./off-text-track-menu-item.js": 86,
            "./text-track-menu-item.js": 89
        }],
        89: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../menu/menu-item.js"),
                l = i(a),
                u = t("../../component.js"),
                c = i(u),
                p = t("../../utils/fn.js"),
                f = n(p),
                h = t("global/window"),
                d = i(h),
                v = t("global/document"),
                g = i(v),
                y = function(t) {
                    function e(o, n) {
                        var i = this;
                        r(this, e);
                        var s = n.track,
                            a = o.textTracks();
                        n.label = s.label || s.language || "Unknown", n.selected = s["default"] || "showing" === s.mode, t.call(this, o, n), this.track = s, a && ! function() {
                            var t = f.bind(i, i.handleTracksChange);
                            a.addEventListener("change", t), i.on("dispose", function() {
                                a.removeEventListener("change", t)
                            })
                        }(), a && void 0 === a.onchange && ! function() {
                            var t = void 0;
                            i.on(["tap", "click"], function() {
                                if ("object" != typeof d["default"].Event) try {
                                    t = new d["default"].Event("change")
                                } catch (e) {}
                                t || (t = g["default"].createEvent("Event"), t.initEvent("change", !0, !0)), a.dispatchEvent(t)
                            })
                        }()
                    }
                    return s(e, t), e.prototype.handleClick = function(e) {
                        var o = this.track.kind,
                            n = this.player_.textTracks();
                        if (t.prototype.handleClick.call(this, e), n)
                            for (var i = 0; i < n.length; i++) {
                                var r = n[i];
                                r.kind === o && (r === this.track ? r.mode = "showing" : r.mode = "disabled")
                            }
                    }, e.prototype.handleTracksChange = function(t) {
                        this.selected("showing" === this.track.mode)
                    }, e
                }(l["default"]);
            c["default"].registerComponent("TextTrackMenuItem", y), o["default"] = y, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../menu/menu-item.js": 105,
            "../../utils/fn.js": 134,
            "global/document": 1,
            "global/window": 2
        }],
        90: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../component.js"),
                l = i(a),
                u = t("../../utils/dom.js"),
                c = n(u),
                p = t("../../utils/format-time.js"),
                f = i(p),
                h = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.on(o, "timeupdate", this.updateContent)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-current-time vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = c.createEl("div", {
                            className: "vjs-current-time-display",
                            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00'
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateContent = function() {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                            e = this.localize("Current Time"),
                            o = f["default"](t, this.player_.duration());
                        o !== this.formattedTime_ && (this.formattedTime_ = o, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + e + "</span> " + o)
                    }, e
                }(l["default"]);
            l["default"].registerComponent("CurrentTimeDisplay", h), o["default"] = h, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../utils/dom.js": 132,
            "../../utils/format-time.js": 135
        }],
        91: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../component.js"),
                l = i(a),
                u = t("../../utils/dom.js"),
                c = n(u),
                p = t("../../utils/format-time.js"),
                f = i(p),
                h = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.on(o, "timeupdate", this.updateContent), this.on(o, "loadedmetadata", this.updateContent)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-duration vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = c.createEl("div", {
                            className: "vjs-duration-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00"
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateContent = function() {
                        var t = this.player_.duration();
                        if (t && this.duration_ !== t) {
                            this.duration_ = t;
                            var e = this.localize("Duration Time"),
                                o = f["default"](t);
                            this.contentEl_.innerHTML = '<span class="vjs-control-text">' + e + "</span> " + o
                        }
                    }, e
                }(l["default"]);
            l["default"].registerComponent("DurationDisplay", h), o["default"] = h, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../utils/dom.js": 132,
            "../../utils/format-time.js": 135
        }],
        92: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../component.js"),
                l = i(a),
                u = t("../../utils/dom.js"),
                c = n(u),
                p = t("../../utils/format-time.js"),
                f = i(p),
                h = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.on(o, "timeupdate", this.updateContent)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-remaining-time vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = c.createEl("div", {
                            className: "vjs-remaining-time-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00"
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateContent = function() {
                        if (this.player_.duration()) {
                            var t = this.localize("Remaining Time"),
                                e = f["default"](this.player_.remainingTime());
                            e !== this.formattedTime_ && (this.formattedTime_ = e, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + t + "</span> -" + e)
                        }
                    }, e
                }(l["default"]);
            l["default"].registerComponent("RemainingTimeDisplay", h), o["default"] = h, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../utils/dom.js": 132,
            "../../utils/format-time.js": 135
        }],
        93: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../../component.js"),
                a = n(s),
                l = function(t) {
                    function e() {
                        i(this, e), t.apply(this, arguments)
                    }
                    return r(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-time-control vjs-time-divider",
                            innerHTML: "<div><span>/</span></div>"
                        })
                    }, e
                }(a["default"]);
            a["default"].registerComponent("TimeDivider", l), o["default"] = l, e.exports = o["default"]
        }, {
            "../../component.js": 67
        }],
        94: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../../slider/slider.js"),
                l = i(a),
                u = t("../../component.js"),
                c = i(u),
                p = t("../../utils/fn.js"),
                f = n(p),
                h = t("./volume-level.js"),
                d = (i(h), function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.on(o, "volumechange", this.updateARIAAttributes), o.ready(f.bind(this, this.updateARIAAttributes))
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-bar vjs-slider-bar"
                        }, {
                            "aria-label": "volume level"
                        })
                    }, e.prototype.handleMouseMove = function(t) {
                        this.checkMuted(), this.player_.volume(this.calculateDistance(t))
                    }, e.prototype.checkMuted = function() {
                        this.player_.muted() && this.player_.muted(!1)
                    }, e.prototype.getPercent = function() {
                        return this.player_.muted() ? 0 : this.player_.volume()
                    }, e.prototype.stepForward = function() {
                        this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                    }, e.prototype.stepBack = function() {
                        this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                    }, e.prototype.updateARIAAttributes = function() {
                        var t = (100 * this.player_.volume()).toFixed(2);
                        this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
                    }, e
                }(l["default"]));
            d.prototype.options_ = {
                children: ["volumeLevel"],
                barName: "volumeLevel"
            }, d.prototype.playerEvent = "volumechange", c["default"].registerComponent("VolumeBar", d), o["default"] = d, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "../../slider/slider.js": 114,
            "../../utils/fn.js": 134,
            "./volume-level.js": 96
        }],
        95: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../../component.js"),
                a = n(s),
                l = t("./volume-bar.js"),
                u = (n(l), function(t) {
                    function e(o, n) {
                        i(this, e), t.call(this, o, n), o.tech_ && o.tech_.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), this.on(o, "loadstart", function() {
                            o.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        })
                    }
                    return r(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-control vjs-control"
                        })
                    }, e
                }(a["default"]));
            u.prototype.options_ = {
                children: ["volumeBar"]
            }, a["default"].registerComponent("VolumeControl", u), o["default"] = u, e.exports = o["default"]
        }, {
            "../../component.js": 67,
            "./volume-bar.js": 94
        }],
        96: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../../component.js"),
                a = n(s),
                l = function(t) {
                    function e() {
                        i(this, e), t.apply(this, arguments)
                    }
                    return r(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-level",
                            innerHTML: '<span class="vjs-control-text"></span>'
                        })
                    }, e
                }(a["default"]);
            a["default"].registerComponent("VolumeLevel", l), o["default"] = l, e.exports = o["default"]
        }, {
            "../../component.js": 67
        }],
        97: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../utils/fn.js"),
                l = i(a),
                u = t("../component.js"),
                c = n(u),
                p = t("../popup/popup.js"),
                f = n(p),
                h = t("../popup/popup-button.js"),
                d = n(h),
                v = t("./mute-toggle.js"),
                g = n(v),
                y = t("./volume-control/volume-bar.js"),
                m = n(y),
                A = t("global/document"),
                b = n(A),
                j = function(t) {
                    function e(o) {
                        function n() {
                            o.tech_ && o.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden");
                        }
                        var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        r(this, e), void 0 === i.inline && (i.inline = !0), void 0 === i.vertical && (i.inline ? i.vertical = !1 : i.vertical = !0), i.volumeBar = i.volumeBar || {}, i.volumeBar.vertical = !!i.vertical, t.call(this, o, i), this.on(o, "volumechange", this.volumeUpdate), this.on(o, "loadstart", this.volumeUpdate), n.call(this), this.on(o, "loadstart", n), this.on(this.volumeBar, ["slideractive", "focus"], function() {
                            this.addClass("vjs-slider-active")
                        }), this.on(this.volumeBar, ["sliderinactive", "blur"], function() {
                            this.removeClass("vjs-slider-active")
                        }), this.on(this.volumeBar, ["focus"], function() {
                            this.addClass("vjs-lock-showing")
                        }), this.on(this.volumeBar, ["blur"], function() {
                            this.removeClass("vjs-lock-showing")
                        })
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        var e = "";
                        return e = this.options_.vertical ? "vjs-volume-menu-button-vertical" : "vjs-volume-menu-button-horizontal", "vjs-volume-menu-button " + t.prototype.buildCSSClass.call(this) + " " + e
                    }, e.prototype.createPopup = function() {
                        var t = new f["default"](this.player_, {
                                contentElType: "div"
                            }),
                            e = new m["default"](this.player_, this.options_.volumeBar);
                        return t.addChild(e), this.menuContent = t, this.volumeBar = e, this.attachVolumeBarEvents(), t
                    }, e.prototype.handleClick = function() {
                        g["default"].prototype.handleClick.call(this), t.prototype.handleClick.call(this)
                    }, e.prototype.attachVolumeBarEvents = function() {
                        this.menuContent.on(["mousedown", "touchdown"], l.bind(this, this.handleMouseDown))
                    }, e.prototype.handleMouseDown = function(t) {
                        this.on(["mousemove", "touchmove"], l.bind(this.volumeBar, this.volumeBar.handleMouseMove)), this.on(b["default"], ["mouseup", "touchend"], this.handleMouseUp)
                    }, e.prototype.handleMouseUp = function(t) {
                        this.off(["mousemove", "touchmove"], l.bind(this.volumeBar, this.volumeBar.handleMouseMove))
                    }, e
                }(d["default"]);
            j.prototype.volumeUpdate = g["default"].prototype.update, j.prototype.controlText_ = "Mute", c["default"].registerComponent("VolumeMenuButton", j), o["default"] = j, e.exports = o["default"]
        }, {
            "../component.js": 67,
            "../popup/popup-button.js": 110,
            "../popup/popup.js": 111,
            "../utils/fn.js": 134,
            "./mute-toggle.js": 71,
            "./volume-control/volume-bar.js": 94,
            "global/document": 1
        }],
        98: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("./component"),
                l = i(a),
                u = t("./modal-dialog"),
                c = i(u),
                p = t("./utils/dom"),
                f = (n(p), t("./utils/merge-options")),
                h = i(f),
                d = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.on(o, "error", this.open)
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.content = function() {
                        var t = this.player().error();
                        return t ? this.localize(t.message) : ""
                    }, e
                }(c["default"]);
            d.prototype.options_ = h["default"](c["default"].prototype.options_, {
                fillAlways: !0,
                temporary: !1,
                uncloseable: !0
            }), l["default"].registerComponent("ErrorDisplay", d), o["default"] = d, e.exports = o["default"]
        }, {
            "./component": 67,
            "./modal-dialog": 107,
            "./utils/dom": 132,
            "./utils/merge-options": 138
        }],
        99: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }
            o.__esModule = !0;
            var i = t("./utils/events.js"),
                r = n(i),
                s = function() {};
            s.prototype.allowedEvents_ = {}, s.prototype.on = function(t, e) {
                var o = this.addEventListener;
                this.addEventListener = Function.prototype, r.on(this, t, e), this.addEventListener = o
            }, s.prototype.addEventListener = s.prototype.on, s.prototype.off = function(t, e) {
                r.off(this, t, e)
            }, s.prototype.removeEventListener = s.prototype.off, s.prototype.one = function(t, e) {
                r.one(this, t, e)
            }, s.prototype.trigger = function(t) {
                var e = t.type || t;
                "string" == typeof t && (t = {
                    type: e
                }), t = r.fixEvent(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), r.trigger(this, t)
            }, s.prototype.dispatchEvent = s.prototype.trigger, o["default"] = s, e.exports = o["default"]
        }, {
            "./utils/events.js": 133
        }],
        100: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            var i = t("./utils/log"),
                r = n(i),
                s = function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (t.super_ = e)
                },
                a = function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        o = function() {
                            t.apply(this, arguments)
                        },
                        n = {};
                    "object" == typeof e ? ("function" == typeof e.init && (r["default"].warn("Constructor logic via init() is deprecated; please use constructor() instead."), e.constructor = e.init), e.constructor !== Object.prototype.constructor && (o = e.constructor), n = e) : "function" == typeof e && (o = e), s(o, t);
                    for (var i in n) n.hasOwnProperty(i) && (o.prototype[i] = n[i]);
                    return o
                };
            o["default"] = a, e.exports = o["default"]
        }, {
            "./utils/log": 137
        }],
        101: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            for (var i = t("global/document"), r = n(i), s = {}, a = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], l = a[0], u = void 0, c = 0; c < a.length; c++)
                if (a[c][1] in r["default"]) {
                    u = a[c];
                    break
                }
            if (u)
                for (var c = 0; c < u.length; c++) s[l[c]] = u[c];
            o["default"] = s, e.exports = o["default"]
        }, {
            "global/document": 1
        }],
        102: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("./component"),
                a = n(s),
                l = function(t) {
                    function e() {
                        i(this, e), t.apply(this, arguments)
                    }
                    return r(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-loading-spinner",
                            dir: "ltr"
                        })
                    }, e
                }(a["default"]);
            a["default"].registerComponent("LoadingSpinner", l), o["default"] = l, e.exports = o["default"]
        }, {
            "./component": 67
        }],
        103: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            var i = t("object.assign"),
                r = n(i),
                s = function l(t) {
                    "number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : "object" == typeof t && r["default"](this, t), this.message || (this.message = l.defaultMessages[this.code] || "")
                };
            s.prototype.code = 0, s.prototype.message = "", s.prototype.status = null, s.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], s.defaultMessages = {
                1: "You aborted the media playback",
                2: "A network error caused the media download to fail part-way.",
                3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The media is encrypted and we do not have the keys to decrypt it."
            };
            for (var a = 0; a < s.errorTypes.length; a++) s[s.errorTypes[a]] = a, s.prototype[s.errorTypes[a]] = a;
            o["default"] = s, e.exports = o["default"]
        }, {
            "object.assign": 45
        }],
        104: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../clickable-component.js"),
                l = i(a),
                u = t("../component.js"),
                c = i(u),
                p = t("./menu.js"),
                f = i(p),
                h = t("../utils/dom.js"),
                d = n(h),
                v = t("../utils/fn.js"),
                g = n(v),
                y = t("../utils/to-title-case.js"),
                m = i(y),
                A = function(t) {
                    function e(o) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        r(this, e), t.call(this, o, n), this.update(), this.el_.setAttribute("aria-haspopup", !0), this.el_.setAttribute("role", "menuitem"), this.on("keydown", this.handleSubmenuKeyPress)
                    }
                    return s(e, t), e.prototype.update = function() {
                        var t = this.createMenu();
                        this.menu && this.removeChild(this.menu), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.el_.setAttribute("aria-expanded", !1), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                    }, e.prototype.createMenu = function() {
                        var t = new f["default"](this.player_);
                        if (this.options_.title) {
                            var e = d.createEl("li", {
                                className: "vjs-menu-title",
                                innerHTML: m["default"](this.options_.title),
                                tabIndex: -1
                            });
                            t.children_.unshift(e), d.insertElFirst(e, t.contentEl())
                        }
                        if (this.items = this.createItems(), this.items)
                            for (var o = 0; o < this.items.length; o++) t.addItem(this.items[o]);
                        return t
                    }, e.prototype.createItems = function() {}, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, e.prototype.buildCSSClass = function() {
                        var e = "vjs-menu-button";
                        return e += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.one("mouseout", g.bind(this, function() {
                            this.menu.unlockShowing(), this.el_.blur()
                        })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                    }, e.prototype.handleKeyPress = function(e) {
                        27 === e.which || 9 === e.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && e.preventDefault()) : 38 === e.which || 40 === e.which ? this.buttonPressed_ || (this.pressButton(), e.preventDefault()) : t.prototype.handleKeyPress.call(this, e)
                    }, e.prototype.handleSubmenuKeyPress = function(t) {
                        27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && t.preventDefault())
                    }, e.prototype.pressButton = function() {
                        this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-expanded", !0), this.menu.focus()
                    }, e.prototype.unpressButton = function() {
                        this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", !1), this.el_.focus()
                    }, e
                }(l["default"]);
            c["default"].registerComponent("MenuButton", A), o["default"] = A, e.exports = o["default"]
        }, {
            "../clickable-component.js": 65,
            "../component.js": 67,
            "../utils/dom.js": 132,
            "../utils/fn.js": 134,
            "../utils/to-title-case.js": 141,
            "./menu.js": 106
        }],
        105: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../clickable-component.js"),
                a = n(s),
                l = t("../component.js"),
                u = n(l),
                c = t("object.assign"),
                p = n(c),
                f = function(t) {
                    function e(o, n) {
                        i(this, e), t.call(this, o, n), this.selectable = n.selectable, this.selected(n.selected), this.selectable ? this.el_.setAttribute("role", "menuitemcheckbox") : this.el_.setAttribute("role", "menuitem")
                    }
                    return r(e, t), e.prototype.createEl = function(e, o, n) {
                        return t.prototype.createEl.call(this, "li", p["default"]({
                            className: "vjs-menu-item",
                            innerHTML: this.localize(this.options_.label),
                            tabIndex: -1
                        }, o), n)
                    }, e.prototype.handleClick = function() {
                        this.selected(!0)
                    }, e.prototype.selected = function(t) {
                        this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", !0), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", !1), this.controlText(" ")))
                    }, e
                }(a["default"]);
            u["default"].registerComponent("MenuItem", f), o["default"] = f, e.exports = o["default"]
        }, {
            "../clickable-component.js": 65,
            "../component.js": 67,
            "object.assign": 45
        }],
        106: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../component.js"),
                l = i(a),
                u = t("../utils/dom.js"),
                c = n(u),
                p = t("../utils/fn.js"),
                f = n(p),
                h = t("../utils/events.js"),
                d = n(h),
                v = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.focusedChild_ = -1, this.on("keydown", this.handleKeyPress)
                    }
                    return s(e, t), e.prototype.addItem = function(t) {
                        this.addChild(t), t.on("click", f.bind(this, function() {
                            this.unlockShowing()
                        }))
                    }, e.prototype.createEl = function() {
                        var e = this.options_.contentElType || "ul";
                        this.contentEl_ = c.createEl(e, {
                            className: "vjs-menu-content"
                        }), this.contentEl_.setAttribute("role", "menu");
                        var o = t.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return o.setAttribute("role", "presentation"), o.appendChild(this.contentEl_), d.on(o, "click", function(t) {
                            t.preventDefault(), t.stopImmediatePropagation()
                        }), o
                    }, e.prototype.handleKeyPress = function(t) {
                        37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepBack())
                    }, e.prototype.stepForward = function() {
                        var t = 0;
                        void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
                    }, e.prototype.stepBack = function() {
                        var t = 0;
                        void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
                    }, e.prototype.focus = function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                            e = this.children().slice(),
                            o = e.length && e[0].className && /vjs-menu-title/.test(e[0].className);
                        o && e.shift(), e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus())
                    }, e
                }(l["default"]);
            l["default"].registerComponent("Menu", v), o["default"] = v, e.exports = o["default"]
        }, {
            "../component.js": 67,
            "../utils/dom.js": 132,
            "../utils/events.js": 133,
            "../utils/fn.js": 134
        }],
        107: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("global/document"),
                l = i(a),
                u = t("./utils/dom"),
                c = n(u),
                p = t("./utils/fn"),
                f = n(p),
                h = t("./utils/log"),
                d = (i(h), t("./component")),
                v = i(d),
                g = t("./close-button"),
                y = (i(g), "vjs-modal-dialog"),
                m = 27,
                A = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = !1, this.closeable(!this.options_.uncloseable), this.content(this.options_.content), this.contentEl_ = c.createEl("div", {
                            className: y + "-content"
                        }, {
                            role: "document"
                        }), this.descEl_ = c.createEl("p", {
                            className: y + "-description vjs-offscreen",
                            id: this.el().getAttribute("aria-describedby")
                        }), c.textContent(this.descEl_, this.description()), this.el_.appendChild(this.descEl_), this.el_.appendChild(this.contentEl_)
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass(),
                            tabIndex: -1
                        }, {
                            "aria-describedby": this.id() + "_description",
                            "aria-hidden": "true",
                            "aria-label": this.label(),
                            role: "dialog"
                        })
                    }, e.prototype.buildCSSClass = function() {
                        return y + " vjs-hidden " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleKeyPress = function(t) {
                        t.which === m && this.closeable() && this.close()
                    }, e.prototype.label = function() {
                        return this.options_.label || this.localize("Modal Window")
                    }, e.prototype.description = function() {
                        var t = this.options_.description || this.localize("This is a modal window.");
                        return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
                    }, e.prototype.open = function() {
                        if (!this.opened_) {
                            var t = this.player();
                            this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.wasPlaying_ && t.pause(), this.closeable() && this.on(l["default"], "keydown", f.bind(this, this.handleKeyPress)), t.controls(!1), this.show(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                        }
                        return this
                    }, e.prototype.opened = function(t) {
                        return "boolean" == typeof t && this[t ? "open" : "close"](), this.opened_
                    }, e.prototype.close = function() {
                        if (this.opened_) {
                            var t = this.player();
                            this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && t.play(), this.closeable() && this.off(l["default"], "keydown", f.bind(this, this.handleKeyPress)), t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.options_.temporary && this.dispose()
                        }
                        return this
                    }, e.prototype.closeable = function o(t) {
                        if ("boolean" == typeof t) {
                            var o = this.closeable_ = !!t,
                                e = this.getChild("closeButton");
                            if (o && !e) {
                                var n = this.contentEl_;
                                this.contentEl_ = this.el_, e = this.addChild("closeButton"), this.contentEl_ = n, this.on(e, "close", this.close)
                            }!o && e && (this.off(e, "close", this.close), this.removeChild(e), e.dispose())
                        }
                        return this.closeable_
                    }, e.prototype.fill = function() {
                        return this.fillWith(this.content())
                    }, e.prototype.fillWith = function(t) {
                        var e = this.contentEl(),
                            o = e.parentNode,
                            n = e.nextSibling;
                        return this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, o.removeChild(e), this.empty(), c.insertContent(e, t), this.trigger("modalfill"), n ? o.insertBefore(e, n) : o.appendChild(e), this
                    }, e.prototype.empty = function() {
                        return this.trigger("beforemodalempty"), c.emptyEl(this.contentEl()), this.trigger("modalempty"), this
                    }, e.prototype.content = function(t) {
                        return "undefined" != typeof t && (this.content_ = t), this.content_
                    }, e
                }(v["default"]);
            A.prototype.options_ = {
                temporary: !0
            }, v["default"].registerComponent("ModalDialog", A), o["default"] = A, e.exports = o["default"]
        }, {
            "./close-button": 66,
            "./component": 67,
            "./utils/dom": 132,
            "./utils/fn": 134,
            "./utils/log": 137,
            "global/document": 1
        }],
        108: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("./component.js"),
                l = i(a),
                u = t("global/document"),
                c = i(u),
                p = t("global/window"),
                f = i(p),
                h = t("./utils/events.js"),
                d = n(h),
                v = t("./utils/dom.js"),
                g = n(v),
                y = t("./utils/fn.js"),
                m = n(y),
                A = t("./utils/guid.js"),
                b = n(A),
                j = t("./utils/browser.js"),
                w = n(j),
                k = t("./utils/log.js"),
                _ = i(k),
                x = t("./utils/to-title-case.js"),
                T = i(x),
                E = t("./utils/time-ranges.js"),
                C = t("./utils/buffer.js"),
                S = t("./utils/stylesheet.js"),
                O = n(S),
                B = t("./fullscreen-api.js"),
                P = i(B),
                M = t("./media-error.js"),
                I = i(M),
                F = t("safe-json-parse/tuple"),
                D = i(F),
                R = t("object.assign"),
                N = i(R),
                L = t("./utils/merge-options.js"),
                z = i(L),
                Q = t("./tracks/text-track-list-converter.js"),
                H = i(Q),
                Y = t("./tech/loader.js"),
                V = (i(Y), t("./poster-image.js")),
                U = (i(V), t("./tracks/text-track-display.js")),
                G = (i(U), t("./loading-spinner.js")),
                W = (i(G), t("./big-play-button.js")),
                J = (i(W), t("./control-bar/control-bar.js")),
                X = (i(J), t("./error-display.js")),
                Z = (i(X), t("./tracks/text-track-settings.js")),
                q = (i(Z), t("./modal-dialog")),
                K = i(q),
                $ = t("./tech/tech.js"),
                tt = i($),
                et = t("./tech/html5.js"),
                ot = (i(et), function(t) {
                    function e(o, n, i) {
                        var s = this;
                        if (r(this, e), o.id = o.id || "vjs_video_" + b.newGUID(), n = N["default"](e.getTagSettings(o), n), n.initChildren = !1, n.createEl = !1, n.reportTouchActivity = !1, t.call(this, null, n, i), !this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                        this.tag = o, this.tagAttributes = o && g.getElAttributes(o), this.language(this.options_.language), n.languages ? ! function() {
                            var t = {};
                            Object.getOwnPropertyNames(n.languages).forEach(function(e) {
                                t[e.toLowerCase()] = n.languages[e]
                            }), s.languages_ = t
                        }() : this.languages_ = e.prototype.options_.languages, this.cache_ = {}, this.poster_ = n.poster || "", this.controls_ = !!n.controls, o.controls = !1, this.scrubbing_ = !1, this.el_ = this.createEl();
                        var a = z["default"](this.options_);
                        n.plugins && ! function() {
                            var t = n.plugins;
                            Object.getOwnPropertyNames(t).forEach(function(e) {
                                "function" == typeof this[e] ? this[e](t[e]) : _["default"].error("Unable to find plugin:", e)
                            }, s)
                        }(), this.options_.playerOptions = a, this.initChildren(), this.isAudio("audio" === o.nodeName.toLowerCase()), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), this.isAudio() && this.addClass("vjs-audio"), this.flexNotSupported_() && this.addClass("vjs-no-flex"), w.IS_IOS || this.addClass("vjs-workinghover"), e.players[this.id_] = this, this.userActive(!0), this.reportUserActivity(), this.listenForUserActivity_(), this.on("fullscreenchange", this.handleFullscreenChange_), this.on("stageclick", this.handleStageClick_)
                    }
                    return s(e, t), e.prototype.dispose = function() {
                        this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && this.styleEl_.parentNode.removeChild(this.styleEl_), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function() {
                        var e = this.el_ = t.prototype.createEl.call(this, "div"),
                            o = this.tag;
                        o.removeAttribute("width"), o.removeAttribute("height");
                        var n = g.getElAttributes(o);
                        Object.getOwnPropertyNames(n).forEach(function(t) {
                            "class" === t ? e.className = n[t] : e.setAttribute(t, n[t])
                        }), o.playerId = o.id, o.id += "_html5_api", o.className = "vjs-tech", o.player = e.player = this, this.addClass("vjs-paused"), this.styleEl_ = O.createStyleElement("vjs-styles-dimensions");
                        var i = g.$(".vjs-styles-defaults"),
                            r = g.$("head");
                        return r.insertBefore(this.styleEl_, i ? i.nextSibling : r.firstChild), this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), o.initNetworkState_ = o.networkState, o.parentNode && o.parentNode.insertBefore(e, o), g.insertElFirst(o, e), this.children_.unshift(o), this.el_ = e, e
                    }, e.prototype.width = function(t) {
                        return this.dimension("width", t)
                    }, e.prototype.height = function(t) {
                        return this.dimension("height", t)
                    }, e.prototype.dimension = function(t, e) {
                        var o = t + "_";
                        if (void 0 === e) return this[o] || 0;
                        if ("" === e) this[o] = void 0;
                        else {
                            var n = parseFloat(e);
                            if (isNaN(n)) return _["default"].error('Improper value "' + e + '" supplied for for ' + t), this;
                            this[o] = n
                        }
                        return this.updateStyleEl_(), this
                    }, e.prototype.fluid = function(t) {
                        return void 0 === t ? !!this.fluid_ : (this.fluid_ = !!t, void(t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid")))
                    }, e.prototype.aspectRatio = function(t) {
                        if (void 0 === t) return this.aspectRatio_;
                        if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                        this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
                    }, e.prototype.updateStyleEl_ = function() {
                        var t = void 0,
                            e = void 0,
                            o = void 0,
                            n = void 0;
                        o = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                        var i = o.split(":"),
                            r = i[1] / i[0];
                        t = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r : this.videoWidth() || 300, e = void 0 !== this.height_ ? this.height_ : t * r, n = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(n), O.setTextContent(this.styleEl_, "\n      ." + n + " {\n        width: " + t + "px;\n        height: " + e + "px;\n      }\n\n      ." + n + ".vjs-fluid {\n        padding-top: " + 100 * r + "%;\n      }\n    ")
                    }, e.prototype.loadTech_ = function(t, e) {
                        this.tech_ && this.unloadTech_(), "Html5" !== t && this.tag && (tt["default"].getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = t, this.isReady_ = !1;
                        var o = N["default"]({
                            nativeControlsForTouch: this.options_.nativeControlsForTouch,
                            source: e,
                            playerId: this.id(),
                            techId: this.id() + "_" + t + "_api",
                            textTracks: this.textTracks_,
                            autoplay: this.options_.autoplay,
                            preload: this.options_.preload,
                            loop: this.options_.loop,
                            muted: this.options_.muted,
                            poster: this.poster(),
                            language: this.language(),
                            "vtt.js": this.options_["vtt.js"]
                        }, this.options_[t.toLowerCase()]);
                        this.tag && (o.tag = this.tag), e && (this.currentType_ = e.type, e.src === this.cache_.src && this.cache_.currentTime > 0 && (o.startTime = this.cache_.currentTime), this.cache_.src = e.src);
                        var n = tt["default"].getTech(t);
                        n || (n = l["default"].getComponent(t)), this.tech_ = new n(o), this.tech_.ready(m.bind(this, this.handleTechReady_), !0), H["default"].jsonToTextTracks(this.textTracksJson_ || [], this.tech_), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "progress", this.handleTechProgress_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "suspend", this.handleTechSuspend_), this.on(this.tech_, "abort", this.handleTechAbort_), this.on(this.tech_, "emptied", this.handleTechEmptied_), this.on(this.tech_, "stalled", this.handleTechStalled_), this.on(this.tech_, "loadedmetadata", this.handleTechLoadedMetaData_), this.on(this.tech_, "loadeddata", this.handleTechLoadedData_), this.on(this.tech_, "timeupdate", this.handleTechTimeUpdate_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.on(this.tech_, "volumechange", this.handleTechVolumeChange_), this.on(this.tech_, "texttrackchange", this.handleTechTextTrackChange_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === t && this.tag || g.insertElFirst(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                    }, e.prototype.unloadTech_ = function() {
                        this.textTracks_ = this.textTracks(), this.textTracksJson_ = H["default"].textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
                    }, e.prototype.tech = function(t) {
                        if (t && t.IWillNotUseThisInPlugins) return this.tech_;
                        var e = "\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ";
                        throw f["default"].alert(e), new Error(e)
                    }, e.prototype.addTechControlsListeners_ = function() {
                        this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                    }, e.prototype.removeTechControlsListeners_ = function() {
                        this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                    }, e.prototype.handleTechReady_ = function() {
                        this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), this.src() && this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play())
                    }, e.prototype.handleTechLoadStart_ = function() {
                        this.removeClass("vjs-ended"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
                    }, e.prototype.hasStarted = function(t) {
                        return void 0 !== t ? (this.hasStarted_ !== t && (this.hasStarted_ = t, t ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : !!this.hasStarted_
                    }, e.prototype.handleTechPlay_ = function() {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                    }, e.prototype.handleTechWaiting_ = function() {
                        var t = this;
                        this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function() {
                            return t.removeClass("vjs-waiting")
                        })
                    }, e.prototype.handleTechCanPlay_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplay")
                    }, e.prototype.handleTechCanPlayThrough_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                    }, e.prototype.handleTechPlaying_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("playing")
                    }, e.prototype.handleTechSeeking_ = function() {
                        this.addClass("vjs-seeking"), this.trigger("seeking")
                    }, e.prototype.handleTechSeeked_ = function() {
                        this.removeClass("vjs-seeking"), this.trigger("seeked")
                    }, e.prototype.handleTechFirstPlay_ = function() {
                        this.options_.starttime && this.currentTime(this.options_.starttime), this.addClass("vjs-has-started"), this.trigger("firstplay")
                    }, e.prototype.handleTechPause_ = function() {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                    }, e.prototype.handleTechProgress_ = function() {
                        this.trigger("progress")
                    }, e.prototype.handleTechEnded_ = function() {
                        this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                    }, e.prototype.handleTechDurationChange_ = function() {
                        this.duration(this.techGet_("duration"))
                    }, e.prototype.handleTechClick_ = function(t) {
                        0 === t.button && this.controls() && (this.paused() ? this.play() : this.pause())
                    }, e.prototype.handleTechTap_ = function() {
                        this.userActive(!this.userActive())
                    }, e.prototype.handleTechTouchStart_ = function() {
                        this.userWasActive = this.userActive()
                    }, e.prototype.handleTechTouchMove_ = function() {
                        this.userWasActive && this.reportUserActivity()
                    }, e.prototype.handleTechTouchEnd_ = function(t) {
                        t.preventDefault()
                    }, e.prototype.handleFullscreenChange_ = function() {
                        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                    }, e.prototype.handleStageClick_ = function() {
                        this.reportUserActivity()
                    }, e.prototype.handleTechFullscreenChange_ = function(t, e) {
                        e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
                    }, e.prototype.handleTechError_ = function() {
                        var t = this.tech_.error();
                        this.error(t && t.code)
                    }, e.prototype.handleTechSuspend_ = function() {
                        this.trigger("suspend")
                    }, e.prototype.handleTechAbort_ = function() {
                        this.trigger("abort")
                    }, e.prototype.handleTechEmptied_ = function() {
                        this.trigger("emptied")
                    }, e.prototype.handleTechStalled_ = function() {
                        this.trigger("stalled")
                    }, e.prototype.handleTechLoadedMetaData_ = function() {
                        this.trigger("loadedmetadata")
                    }, e.prototype.handleTechLoadedData_ = function() {
                        this.trigger("loadeddata")
                    }, e.prototype.handleTechTimeUpdate_ = function() {
                        this.trigger("timeupdate")
                    }, e.prototype.handleTechRateChange_ = function() {
                        this.trigger("ratechange")
                    }, e.prototype.handleTechVolumeChange_ = function() {
                        this.trigger("volumechange")
                    }, e.prototype.handleTechTextTrackChange_ = function() {
                        this.trigger("texttrackchange")
                    }, e.prototype.getCache = function() {
                        return this.cache_
                    }, e.prototype.techCall_ = function(t, e) {
                        if (this.tech_ && !this.tech_.isReady_) this.tech_.ready(function() {
                            this[t](e)
                        }, !0);
                        else try {
                            this.tech_[t](e)
                        } catch (o) {
                            throw _["default"](o), o
                        }
                    }, e.prototype.techGet_ = function(t) {
                        if (this.tech_ && this.tech_.isReady_) try {
                            return this.tech_[t]()
                        } catch (e) {
                            throw void 0 === this.tech_[t] ? _["default"]("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e) : "TypeError" === e.name ? (_["default"]("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1) : _["default"](e), e
                        }
                    }, e.prototype.play = function() {
                        return this.techCall_("play"), this
                    }, e.prototype.pause = function() {
                        return this.techCall_("pause"), this
                    }, e.prototype.paused = function() {
                        return this.techGet_("paused") !== !1
                    }, e.prototype.scrubbing = function(t) {
                        return void 0 !== t ? (this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing"), this) : this.scrubbing_
                    }, e.prototype.currentTime = function(t) {
                        return void 0 !== t ? (this.techCall_("setCurrentTime", t), this) : this.cache_.currentTime = this.techGet_("currentTime") || 0
                    }, e.prototype.duration = function(t) {
                        return void 0 === t ? this.cache_.duration || 0 : (t = parseFloat(t) || 0, t < 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange")), this)
                    }, e.prototype.remainingTime = function() {
                        return this.duration() - this.currentTime()
                    }, e.prototype.buffered = function o() {
                        var o = this.techGet_("buffered");
                        return o && o.length || (o = E.createTimeRange(0, 0)), o
                    }, e.prototype.bufferedPercent = function() {
                        return C.bufferedPercent(this.buffered(), this.duration())
                    }, e.prototype.bufferedEnd = function() {
                        var t = this.buffered(),
                            e = this.duration(),
                            o = t.end(t.length - 1);
                        return o > e && (o = e), o
                    }, e.prototype.volume = function(t) {
                        var e = void 0;
                        return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), this) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
                    }, e.prototype.muted = function(t) {
                        return void 0 !== t ? (this.techCall_("setMuted", t), this) : this.techGet_("muted") || !1
                    }, e.prototype.supportsFullScreen = function() {
                        return this.techGet_("supportsFullScreen") || !1
                    }, e.prototype.isFullscreen = function(t) {
                        return void 0 !== t ? (this.isFullscreen_ = !!t, this) : !!this.isFullscreen_
                    }, e.prototype.requestFullscreen = function() {
                        var t = P["default"];
                        return this.isFullscreen(!0), t.requestFullscreen ? (d.on(c["default"], t.fullscreenchange, m.bind(this, function e(o) {
                            this.isFullscreen(c["default"][t.fullscreenElement]), this.isFullscreen() === !1 && d.off(c["default"], t.fullscreenchange, e), this.trigger("fullscreenchange")
                        })), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
                    }, e.prototype.exitFullscreen = function() {
                        var t = P["default"];
                        return this.isFullscreen(!1), t.requestFullscreen ? c["default"][t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
                    }, e.prototype.enterFullWindow = function() {
                        this.isFullWindow = !0, this.docOrigOverflow = c["default"].documentElement.style.overflow, d.on(c["default"], "keydown", m.bind(this, this.fullWindowOnEscKey)), c["default"].documentElement.style.overflow = "hidden", g.addElClass(c["default"].body, "vjs-full-window"), this.trigger("enterFullWindow")
                    }, e.prototype.fullWindowOnEscKey = function(t) {
                        27 === t.keyCode && (this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow())
                    }, e.prototype.exitFullWindow = function() {
                        this.isFullWindow = !1, d.off(c["default"], "keydown", this.fullWindowOnEscKey), c["default"].documentElement.style.overflow = this.docOrigOverflow, g.removeElClass(c["default"].body, "vjs-full-window"), this.trigger("exitFullWindow")
                    }, e.prototype.canPlayType = function(t) {
                        for (var e = void 0, o = 0, n = this.options_.techOrder; o < n.length; o++) {
                            var i = T["default"](n[o]),
                                r = tt["default"].getTech(i);
                            if (r || (r = l["default"].getComponent(i)), r) {
                                if (r.isSupported() && (e = r.canPlayType(t))) return e
                            } else _["default"].error('The "' + i + '" tech is undefined. Skipped browser support check for that tech.')
                        }
                        return ""
                    }, e.prototype.selectSource = function(t) {
                        var e = this.options_.techOrder.map(T["default"]).map(function(t) {
                                return [t, tt["default"].getTech(t) || l["default"].getComponent(t)]
                            }).filter(function(t) {
                                var e = t[0],
                                    o = t[1];
                                return o ? o.isSupported() : (_["default"].error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                            }),
                            o = function(t, e, o) {
                                var n = void 0;
                                return t.some(function(t) {
                                    return e.some(function(e) {
                                        if (n = o(t, e)) return !0
                                    })
                                }), n
                            },
                            n = void 0,
                            i = function(t) {
                                return function(e, o) {
                                    return t(o, e)
                                }
                            },
                            r = function(t, e) {
                                var o = t[0],
                                    n = t[1];
                                if (n.canPlaySource(e)) return {
                                    source: e,
                                    tech: o
                                }
                            };
                        return n = this.options_.sourceOrder ? o(t, e, i(r)) : o(e, t, r), n || !1
                    }, e.prototype.src = function(t) {
                        if (void 0 === t) return this.techGet_("src");
                        var e = tt["default"].getTech(this.techName_);
                        return e || (e = l["default"].getComponent(this.techName_)), Array.isArray(t) ? this.sourceList_(t) : "string" == typeof t ? this.src({
                            src: t
                        }) : t instanceof Object && (t.type && !e.canPlaySource(t) ? this.sourceList_([t]) : (this.cache_.src = t.src, this.currentType_ = t.type || "", this.ready(function() {
                            e.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), "auto" === this.options_.preload && this.load(), this.options_.autoplay && this.play()
                        }, !0))), this
                    }, e.prototype.sourceList_ = function(t) {
                        var e = this.selectSource(t);
                        e ? e.tech === this.techName_ ? this.src(e.source) : this.loadTech_(e.tech, e.source) : (this.setTimeout(function() {
                            this.error({
                                code: 4,
                                message: this.localize(this.options_.notSupportedMessage)
                            })
                        }, 0), this.triggerReady())
                    }, e.prototype.load = function() {
                        return this.techCall_("load"), this
                    }, e.prototype.reset = function() {
                        return this.loadTech_(T["default"](this.options_.techOrder[0]), null), this.techCall_("reset"), this
                    }, e.prototype.currentSrc = function() {
                        return this.techGet_("currentSrc") || this.cache_.src || ""
                    }, e.prototype.currentType = function() {
                        return this.currentType_ || ""
                    }, e.prototype.preload = function(t) {
                        return void 0 !== t ? (this.techCall_("setPreload", t), this.options_.preload = t, this) : this.techGet_("preload")
                    }, e.prototype.autoplay = function(t) {
                        return void 0 !== t ? (this.techCall_("setAutoplay", t), this.options_.autoplay = t, this) : this.techGet_("autoplay", t)
                    }, e.prototype.loop = function(t) {
                        return void 0 !== t ? (this.techCall_("setLoop", t), this.options_.loop = t, this) : this.techGet_("loop")
                    }, e.prototype.poster = function(t) {
                        return void 0 === t ? this.poster_ : (t || (t = ""), this.poster_ = t, this.techCall_("setPoster", t), this.trigger("posterchange"), this)
                    }, e.prototype.handleTechPosterChange_ = function() {
                        !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
                    }, e.prototype.controls = function(t) {
                        return void 0 !== t ? (t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), t ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())), this) : !!this.controls_
                    }, e.prototype.usingNativeControls = function(t) {
                        return void 0 !== t ? (t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, t ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : !!this.usingNativeControls_
                    }, e.prototype.error = function(t) {
                        return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), this.errorDisplay.close(), this) : (t instanceof I["default"] ? this.error_ = t : this.error_ = new I["default"](t), this.addClass("vjs-error"), _["default"].error("(CODE:" + this.error_.code + " " + I["default"].errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error"), this)
                    }, e.prototype.ended = function() {
                        return this.techGet_("ended")
                    }, e.prototype.seeking = function() {
                        return this.techGet_("seeking")
                    }, e.prototype.seekable = function() {
                        return this.techGet_("seekable")
                    }, e.prototype.reportUserActivity = function(t) {
                        this.userActivity_ = !0
                    }, e.prototype.userActive = function(t) {
                        return void 0 !== t ? (t = !!t, t !== this.userActive_ && (this.userActive_ = t, t ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech_ && this.tech_.one("mousemove", function(t) {
                            t.stopPropagation(), t.preventDefault()
                        }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
                    }, e.prototype.listenForUserActivity_ = function() {
                        var t = void 0,
                            e = void 0,
                            o = void 0,
                            n = m.bind(this, this.reportUserActivity),
                            i = function(t) {
                                t.screenX === e && t.screenY === o || (e = t.screenX, o = t.screenY, n())
                            },
                            r = function() {
                                n(), this.clearInterval(t), t = this.setInterval(n, 250)
                            },
                            s = function(e) {
                                n(), this.clearInterval(t)
                            };
                        this.on("mousedown", r), this.on("mousemove", i), this.on("mouseup", s), this.on("keydown", n), this.on("keyup", n);
                        var a = void 0;
                        this.setInterval(function() {
                            if (this.userActivity_) {
                                this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
                                var t = this.options_.inactivityTimeout;
                                t > 0 && (a = this.setTimeout(function() {
                                    this.userActivity_ || this.userActive(!1)
                                }, t))
                            }
                        }, 250)
                    }, e.prototype.playbackRate = function(t) {
                        return void 0 !== t ? (this.techCall_("setPlaybackRate", t), this) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
                    }, e.prototype.isAudio = function(t) {
                        return void 0 !== t ? (this.isAudio_ = !!t, this) : !!this.isAudio_
                    }, e.prototype.networkState = function() {
                        return this.techGet_("networkState")
                    }, e.prototype.readyState = function() {
                        return this.techGet_("readyState")
                    }, e.prototype.textTracks = function() {
                        return this.tech_ && this.tech_.textTracks()
                    }, e.prototype.remoteTextTracks = function() {
                        return this.tech_ && this.tech_.remoteTextTracks()
                    }, e.prototype.remoteTextTrackEls = function() {
                        return this.tech_ && this.tech_.remoteTextTrackEls()
                    }, e.prototype.addTextTrack = function(t, e, o) {
                        return this.tech_ && this.tech_.addTextTrack(t, e, o)
                    }, e.prototype.addRemoteTextTrack = function(t) {
                        return this.tech_ && this.tech_.addRemoteTextTrack(t)
                    }, e.prototype.removeRemoteTextTrack = function(t) {
                        this.tech_ && this.tech_.removeRemoteTextTrack(t)
                    }, e.prototype.videoWidth = function() {
                        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                    }, e.prototype.videoHeight = function() {
                        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                    }, e.prototype.language = function(t) {
                        return void 0 === t ? this.language_ : (this.language_ = ("" + t).toLowerCase(), this)
                    }, e.prototype.languages = function() {
                        return z["default"](e.prototype.options_.languages, this.languages_)
                    }, e.prototype.toJSON = function() {
                        var t = z["default"](this.options_),
                            e = t.tracks;
                        t.tracks = [];
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n = z["default"](n), n.player = void 0, t.tracks[o] = n
                        }
                        return t
                    }, e.prototype.createModal = function(t, e) {
                        var o = this;
                        e = e || {}, e.content = t || "";
                        var n = new K["default"](o, e);
                        return o.addChild(n), n.on("dispose", function() {
                            o.removeChild(n)
                        }), n.open()
                    }, e.getTagSettings = function(t) {
                        var e = {
                                sources: [],
                                tracks: []
                            },
                            o = g.getElAttributes(t),
                            n = o["data-setup"];
                        if (null !== n) {
                            var i = D["default"](n || "{}"),
                                r = i[0],
                                s = i[1];
                            r && _["default"].error(r), N["default"](o, s)
                        }
                        if (N["default"](e, o), t.hasChildNodes())
                            for (var a = t.childNodes, l = 0, u = a.length; l < u; l++) {
                                var c = a[l],
                                    p = c.nodeName.toLowerCase();
                                "source" === p ? e.sources.push(g.getElAttributes(c)) : "track" === p && e.tracks.push(g.getElAttributes(c))
                            }
                        return e
                    }, e
                }(l["default"]));
            ot.players = {};
            var nt = f["default"].navigator;
            ot.prototype.options_ = {
                techOrder: ["html5", "flash"],
                html5: {},
                flash: {},
                defaultVolume: 0,
                inactivityTimeout: 2e3,
                playbackRates: [],
                children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
                language: c["default"].getElementsByTagName("html")[0].getAttribute("lang") || nt.languages && nt.languages[0] || nt.userLanguage || nt.language || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this media."
            }, ot.prototype.handleLoadedMetaData_, ot.prototype.handleLoadedData_, ot.prototype.handleUserActive_, ot.prototype.handleUserInactive_, ot.prototype.handleTimeUpdate_, ot.prototype.handleTechEnded_, ot.prototype.handleVolumeChange_, ot.prototype.handleError_, ot.prototype.flexNotSupported_ = function() {
                var t = c["default"].createElement("i");
                return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
            }, l["default"].registerComponent("Player", ot), o["default"] = ot, e.exports = o["default"]
        }, {
            "./big-play-button.js": 63,
            "./component.js": 67,
            "./control-bar/control-bar.js": 68,
            "./error-display.js": 98,
            "./fullscreen-api.js": 101,
            "./loading-spinner.js": 102,
            "./media-error.js": 103,
            "./modal-dialog": 107,
            "./poster-image.js": 112,
            "./tech/html5.js": 117,
            "./tech/loader.js": 118,
            "./tech/tech.js": 119,
            "./tracks/text-track-display.js": 123,
            "./tracks/text-track-list-converter.js": 125,
            "./tracks/text-track-settings.js": 127,
            "./utils/browser.js": 129,
            "./utils/buffer.js": 130,
            "./utils/dom.js": 132,
            "./utils/events.js": 133,
            "./utils/fn.js": 134,
            "./utils/guid.js": 136,
            "./utils/log.js": 137,
            "./utils/merge-options.js": 138,
            "./utils/stylesheet.js": 139,
            "./utils/time-ranges.js": 140,
            "./utils/to-title-case.js": 141,
            "global/document": 1,
            "global/window": 2,
            "object.assign": 45,
            "safe-json-parse/tuple": 54
        }],
        109: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            var i = t("./player.js"),
                r = n(i),
                s = function(t, e) {
                    r["default"].prototype[t] = e
                };
            o["default"] = s, e.exports = o["default"]
        }, {
            "./player.js": 108
        }],
        110: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../clickable-component.js"),
                l = i(a),
                u = t("../component.js"),
                c = i(u),
                p = t("./popup.js"),
                f = (i(p), t("../utils/dom.js")),
                h = (n(f), t("../utils/fn.js")),
                d = (n(h), t("../utils/to-title-case.js")),
                v = (i(d), function(t) {
                    function e(o) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        r(this, e), t.call(this, o, n), this.update()
                    }
                    return s(e, t), e.prototype.update = function() {
                        var t = this.createPopup();
                        this.popup && this.removeChild(this.popup), this.popup = t, this.addChild(t), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                    }, e.prototype.createPopup = function() {}, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, e.prototype.buildCSSClass = function() {
                        var e = "vjs-menu-button";
                        return e += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
                    }, e
                }(l["default"]));
            c["default"].registerComponent("PopupButton", v), o["default"] = v, e.exports = o["default"]
        }, {
            "../clickable-component.js": 65,
            "../component.js": 67,
            "../utils/dom.js": 132,
            "../utils/fn.js": 134,
            "../utils/to-title-case.js": 141,
            "./popup.js": 111
        }],
        111: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../component.js"),
                l = i(a),
                u = t("../utils/dom.js"),
                c = n(u),
                p = t("../utils/fn.js"),
                f = n(p),
                h = t("../utils/events.js"),
                d = n(h),
                v = function(t) {
                    function e() {
                        r(this, e), t.apply(this, arguments)
                    }
                    return s(e, t), e.prototype.addItem = function(t) {
                        this.addChild(t), t.on("click", f.bind(this, function() {
                            this.unlockShowing()
                        }))
                    }, e.prototype.createEl = function() {
                        var e = this.options_.contentElType || "ul";
                        this.contentEl_ = c.createEl(e, {
                            className: "vjs-menu-content"
                        });
                        var o = t.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return o.appendChild(this.contentEl_), d.on(o, "click", function(t) {
                            t.preventDefault(), t.stopImmediatePropagation()
                        }), o
                    }, e
                }(l["default"]);
            l["default"].registerComponent("Popup", v), o["default"] = v, e.exports = o["default"]
        }, {
            "../component.js": 67,
            "../utils/dom.js": 132,
            "../utils/events.js": 133,
            "../utils/fn.js": 134
        }],
        112: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("./clickable-component.js"),
                l = i(a),
                u = t("./component.js"),
                c = i(u),
                p = t("./utils/fn.js"),
                f = n(p),
                h = t("./utils/dom.js"),
                d = n(h),
                v = t("./utils/browser.js"),
                g = n(v),
                y = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.update(), o.on("posterchange", f.bind(this, this.update))
                    }
                    return s(e, t), e.prototype.dispose = function() {
                        this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function() {
                        var t = d.createEl("div", {
                            className: "vjs-poster",
                            tabIndex: -1
                        });
                        return g.BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = d.createEl("img"), t.appendChild(this.fallbackImg_)), t
                    }, e.prototype.update = function() {
                        var t = this.player().poster();
                        this.setSrc(t), t ? this.show() : this.hide()
                    }, e.prototype.setSrc = function(t) {
                        if (this.fallbackImg_) this.fallbackImg_.src = t;
                        else {
                            var e = "";
                            t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
                        }
                    }, e.prototype.handleClick = function() {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, e
                }(l["default"]);
            c["default"].registerComponent("PosterImage", y), o["default"] = y, e.exports = o["default"]
        }, {
            "./clickable-component.js": 65,
            "./component.js": 67,
            "./utils/browser.js": 129,
            "./utils/dom.js": 132,
            "./utils/fn.js": 134
        }],
        113: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }
            o.__esModule = !0;
            var r = t("./utils/events.js"),
                s = i(r),
                a = t("global/document"),
                l = n(a),
                u = t("global/window"),
                c = n(u),
                p = !1,
                f = void 0,
                h = function() {
                    var t = l["default"].getElementsByTagName("video"),
                        e = l["default"].getElementsByTagName("audio"),
                        o = [];
                    if (t && t.length > 0)
                        for (var n = 0, i = t.length; n < i; n++) o.push(t[n]);
                    if (e && e.length > 0)
                        for (var n = 0, i = e.length; n < i; n++) o.push(e[n]);
                    if (o && o.length > 0)
                        for (var n = 0, i = o.length; n < i; n++) {
                            var r = o[n];
                            if (!r || !r.getAttribute) {
                                d(1);
                                break
                            }
                            if (void 0 === r.player) {
                                var s = r.getAttribute("data-setup");
                                if (null !== s) {
                                    f(r)
                                }
                            }
                        } else p || d(1)
                },
                d = function(t, e) {
                    e && (f = e), setTimeout(h, t)
                };
            "complete" === l["default"].readyState ? p = !0 : s.one(c["default"], "load", function() {
                p = !0
            });
            var v = function() {
                return p
            };
            o.autoSetup = h, o.autoSetupTimeout = d, o.hasLoaded = v
        }, {
            "./utils/events.js": 133,
            "global/document": 1,
            "global/window": 2
        }],
        114: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../component.js"),
                l = i(a),
                u = t("../utils/dom.js"),
                c = n(u),
                p = t("global/document"),
                f = i(p),
                h = t("object.assign"),
                d = i(h),
                v = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.bar = this.getChild(this.options_.barName), this.vertical(!!this.options_.vertical), this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(o, "controlsvisible", this.update), this.on(o, this.playerEvent, this.update)
                    }
                    return s(e, t), e.prototype.createEl = function(e) {
                        var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        return o.className = o.className + " vjs-slider", o = d["default"]({
                            tabIndex: 0
                        }, o), n = d["default"]({
                            role: "slider",
                            "aria-valuenow": 0,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            tabIndex: 0
                        }, n), t.prototype.createEl.call(this, e, o, n)
                    }, e.prototype.handleMouseDown = function(t) {
                        t.preventDefault(), c.blockTextSelection(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(f["default"], "mousemove", this.handleMouseMove), this.on(f["default"], "mouseup", this.handleMouseUp), this.on(f["default"], "touchmove", this.handleMouseMove), this.on(f["default"], "touchend", this.handleMouseUp), this.handleMouseMove(t)
                    }, e.prototype.handleMouseMove = function() {}, e.prototype.handleMouseUp = function() {
                        c.unblockTextSelection(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(f["default"], "mousemove", this.handleMouseMove), this.off(f["default"], "mouseup", this.handleMouseUp), this.off(f["default"], "touchmove", this.handleMouseMove), this.off(f["default"], "touchend", this.handleMouseUp), this.update()
                    }, e.prototype.update = function() {
                        if (this.el_) {
                            var t = this.getPercent(),
                                e = this.bar;
                            if (e) {
                                ("number" != typeof t || t !== t || t < 0 || t === 1 / 0) && (t = 0);
                                var o = (100 * t).toFixed(2) + "%";
                                this.vertical() ? e.el().style.height = o : e.el().style.width = o
                            }
                        }
                    }, e.prototype.calculateDistance = function(t) {
                        var e = c.getPointerPosition(this.el_, t);
                        return this.vertical() ? e.y : e.x
                    }, e.prototype.handleFocus = function() {
                        this.on(f["default"], "keydown", this.handleKeyPress)
                    }, e.prototype.handleKeyPress = function(t) {
                        37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepForward())
                    }, e.prototype.handleBlur = function() {
                        this.off(f["default"], "keydown", this.handleKeyPress)
                    }, e.prototype.handleClick = function(t) {
                        t.stopImmediatePropagation(), t.preventDefault()
                    }, e.prototype.vertical = function(t) {
                        return void 0 === t ? this.vertical_ || !1 : (this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal"), this)
                    }, e
                }(l["default"]);
            l["default"].registerComponent("Slider", v), o["default"] = v, e.exports = o["default"]
        }, {
            "../component.js": 67,
            "../utils/dom.js": 132,
            "global/document": 1,
            "object.assign": 45
        }],
        115: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t.streamingFormats = {
                    "rtmp/mp4": "MP4",
                    "rtmp/flv": "FLV"
                }, t.streamFromParts = function(t, e) {
                    return t + "&" + e
                }, t.streamToParts = function(t) {
                    var e = {
                        connection: "",
                        stream: ""
                    };
                    if (!t) return e;
                    var o = t.search(/&(?!\w+=)/),
                        n = void 0;
                    return o !== -1 ? n = o + 1 : (o = n = t.lastIndexOf("/") + 1, 0 === o && (o = n = t.length)), e.connection = t.substring(0, o), e.stream = t.substring(n, t.length), e
                }, t.isStreamingType = function(e) {
                    return e in t.streamingFormats
                }, t.RTMP_RE = /^rtmp[set]?:\/\//i, t.isStreamingSrc = function(e) {
                    return t.RTMP_RE.test(e)
                }, t.rtmpSourceHandler = {}, t.rtmpSourceHandler.canPlayType = function(e) {
                    return t.isStreamingType(e) ? "maybe" : ""
                }, t.rtmpSourceHandler.canHandleSource = function(e) {
                    var o = t.rtmpSourceHandler.canPlayType(e.type);
                    return o ? o : t.isStreamingSrc(e.src) ? "maybe" : ""
                }, t.rtmpSourceHandler.handleSource = function(e, o) {
                    var n = t.streamToParts(e.src);
                    o.setRtmpConnection(n.connection), o.setRtmpStream(n.stream)
                }, t.registerSourceHandler(t.rtmpSourceHandler), t
            }
            o.__esModule = !0, o["default"] = n, e.exports = o["default"]
        }, {}],
        116: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function a(t) {
                var e = t.charAt(0).toUpperCase() + t.slice(1);
                T["set" + e] = function(e) {
                    return this.el_.vjs_setProperty(t, e)
                }
            }

            function l(t) {
                T[t] = function() {
                    return this.el_.vjs_getProperty(t)
                }
            }
            o.__esModule = !0;
            for (var u = t("./tech"), c = i(u), p = t("../utils/dom.js"), f = n(p), h = t("../utils/url.js"), d = n(h), v = t("../utils/time-ranges.js"), g = t("./flash-rtmp"), y = i(g), m = t("../component"), A = i(m), b = t("global/window"), j = i(b), w = t("object.assign"), k = i(w), _ = j["default"].navigator, x = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), o.source && this.ready(function() {
                            this.setSource(o.source)
                        }, !0), o.startTime && this.ready(function() {
                            this.load(), this.play(), this.currentTime(o.startTime)
                        }, !0), j["default"].videojs = j["default"].videojs || {}, j["default"].videojs.Flash = j["default"].videojs.Flash || {}, j["default"].videojs.Flash.onReady = e.onReady, j["default"].videojs.Flash.onEvent = e.onEvent, j["default"].videojs.Flash.onError = e.onError, this.on("seeked", function() {
                            this.lastSeekTarget_ = void 0
                        })
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var t = this.options_;
                        t.swf || (t.swf = "//vjs.zencdn.net/swf/5.0.1/video-js.swf");
                        var o = t.techId,
                            n = k["default"]({
                                readyFunction: "videojs.Flash.onReady",
                                eventProxyFunction: "videojs.Flash.onEvent",
                                errorEventProxyFunction: "videojs.Flash.onError",
                                autoplay: t.autoplay,
                                preload: t.preload,
                                loop: t.loop,
                                muted: t.muted
                            }, t.flashVars),
                            i = k["default"]({
                                wmode: "opaque",
                                bgcolor: "#000000"
                            }, t.params),
                            r = k["default"]({
                                id: o,
                                name: o,
                                "class": "vjs-tech"
                            }, t.attributes);
                        return this.el_ = e.embed(t.swf, n, i, r), this.el_.tech = this, this.el_
                    }, e.prototype.play = function() {
                        this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
                    }, e.prototype.pause = function() {
                        this.el_.vjs_pause()
                    }, e.prototype.src = function(t) {
                        return void 0 === t ? this.currentSrc() : this.setSrc(t)
                    }, e.prototype.setSrc = function(t) {
                        if (t = d.getAbsoluteURL(t), this.el_.vjs_src(t), this.autoplay()) {
                            var e = this;
                            this.setTimeout(function() {
                                e.play()
                            }, 0)
                        }
                    }, e.prototype.seeking = function() {
                        return void 0 !== this.lastSeekTarget_
                    }, e.prototype.setCurrentTime = function(e) {
                        var o = this.seekable();
                        o.length && (e = e > o.start(0) ? e : o.start(0), e = e < o.end(o.length - 1) ? e : o.end(o.length - 1), this.lastSeekTarget_ = e, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", e), t.prototype.setCurrentTime.call(this))
                    }, e.prototype.currentTime = function(t) {
                        return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
                    }, e.prototype.currentSrc = function() {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
                    }, e.prototype.load = function() {
                        this.el_.vjs_load()
                    }, e.prototype.poster = function() {
                        this.el_.vjs_getProperty("poster")
                    }, e.prototype.setPoster = function() {}, e.prototype.seekable = function() {
                        var t = this.duration();
                        return 0 === t ? v.createTimeRange() : v.createTimeRange(0, t)
                    }, e.prototype.buffered = function() {
                        var t = this.el_.vjs_getProperty("buffered");
                        return 0 === t.length ? v.createTimeRange() : v.createTimeRange(t[0][0], t[0][1])
                    }, e.prototype.supportsFullScreen = function() {
                        return !1
                    }, e.prototype.enterFullScreen = function() {
                        return !1
                    }, e
                }(c["default"]), T = x.prototype, E = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), C = "networkState,readyState,initialTime,duration,startOffsetTime,paused,ended,videoTracks,audioTracks,videoWidth,videoHeight".split(","), S = 0; S < E.length; S++) l(E[S]), a(E[S]);
            for (var S = 0; S < C.length; S++) l(C[S]);
            x.isSupported = function() {
                return x.version()[0] >= 10
            }, c["default"].withSourceHandlers(x), x.nativeSourceHandler = {}, x.nativeSourceHandler.canPlayType = function(t) {
                return t in x.formats ? "maybe" : ""
            }, x.nativeSourceHandler.canHandleSource = function(t) {
                function e(t) {
                    var e = d.getFileExtension(t);
                    return e ? "video/" + e : ""
                }
                var o;
                return o = t.type ? t.type.replace(/;.*/, "").toLowerCase() : e(t.src), x.nativeSourceHandler.canPlayType(o)
            }, x.nativeSourceHandler.handleSource = function(t, e) {
                e.setSrc(t.src)
            }, x.nativeSourceHandler.dispose = function() {}, x.registerSourceHandler(x.nativeSourceHandler), x.formats = {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            }, x.onReady = function(t) {
                var e = f.getEl(t),
                    o = e && e.tech;
                o && o.el() && x.checkReady(o)
            }, x.checkReady = function(t) {
                t.el() && (t.el().vjs_getProperty ? t.triggerReady() : this.setTimeout(function() {
                    x.checkReady(t)
                }, 50))
            }, x.onEvent = function(t, e) {
                var o = f.getEl(t).tech;
                o.trigger(e)
            }, x.onError = function(t, e) {
                var o = f.getEl(t).tech;
                return "srcnotfound" === e ? o.error(4) : void o.error("FLASH: " + e)
            }, x.version = function() {
                var t = "0,0,0";
                try {
                    t = new j["default"].ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (e) {
                    try {
                        _.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (_.plugins["Shockwave Flash 2.0"] || _.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                    } catch (o) {}
                }
                return t.split(",")
            }, x.embed = function(t, e, o, n) {
                var i = x.getEmbedCode(t, e, o, n),
                    r = f.createEl("div", {
                        innerHTML: i
                    }).childNodes[0];
                return r
            }, x.getEmbedCode = function(t, e, o, n) {
                var i = '<object type="application/x-shockwave-flash" ',
                    r = "",
                    s = "",
                    a = "";
                return e && Object.getOwnPropertyNames(e).forEach(function(t) {
                    r += t + "=" + e[t] + "&amp;"
                }), o = k["default"]({
                    movie: t,
                    flashvars: r,
                    allowScriptAccess: "always",
                    allowNetworking: "all"
                }, o), Object.getOwnPropertyNames(o).forEach(function(t) {
                    s += '<param name="' + t + '" value="' + o[t] + '" />'
                }), n = k["default"]({
                    data: t,
                    width: "100%",
                    height: "100%"
                }, n), Object.getOwnPropertyNames(n).forEach(function(t) {
                    a += t + '="' + n[t] + '" '
                }), "" + i + a + ">" + s + "</object>"
            }, y["default"](x), A["default"].registerComponent("Flash", x), c["default"].registerTech("Flash", x), o["default"] = x, e.exports = o["default"]
        }, {
            "../component": 67,
            "../utils/dom.js": 132,
            "../utils/time-ranges.js": 140,
            "../utils/url.js": 142,
            "./flash-rtmp": 115,
            "./tech": 119,
            "global/window": 2,
            "object.assign": 45
        }],
        117: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("./tech.js"),
                l = i(a),
                u = t("../component"),
                c = i(u),
                p = t("../utils/dom.js"),
                f = n(p),
                h = t("../utils/url.js"),
                d = n(h),
                v = t("../utils/fn.js"),
                g = n(v),
                y = t("../utils/log.js"),
                m = i(y),
                A = t("../utils/browser.js"),
                b = n(A),
                j = t("global/document"),
                w = i(j),
                k = t("global/window"),
                _ = i(k),
                x = t("object.assign"),
                T = i(x),
                E = t("../utils/merge-options.js"),
                C = i(E),
                S = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n);
                        var i = o.source;
                        if (i && (this.el_.currentSrc !== i.src || o.tag && 3 === o.tag.initNetworkState_) ? this.setSource(i) : this.handleLateInit_(this.el_), this.el_.hasChildNodes()) {
                            for (var s = this.el_.childNodes, a = s.length, l = []; a--;) {
                                var u = s[a],
                                    c = u.nodeName.toLowerCase();
                                "track" === c && (this.featuresNativeTextTracks ? (this.remoteTextTrackEls().addTrackElement_(u), this.remoteTextTracks().addTrack_(u.track)) : l.push(u))
                            }
                            for (var p = 0; p < l.length; p++) this.el_.removeChild(l[p])
                        }
                        this.featuresNativeTextTracks && (this.handleTextTrackChange_ = g.bind(this, this.handleTextTrackChange), this.handleTextTrackAdd_ = g.bind(this, this.handleTextTrackAdd), this.handleTextTrackRemove_ = g.bind(this, this.handleTextTrackRemove), this.proxyNativeTextTracks_()), (b.TOUCH_ENABLED && o.nativeControlsForTouch === !0 || b.IS_IPHONE || b.IS_NATIVE_ANDROID) && this.setControls(!0), this.triggerReady()
                    }
                    return s(e, t), e.prototype.dispose = function() {
                        var o = this.el().textTracks,
                            n = this.textTracks();
                        o && o.removeEventListener && (o.removeEventListener("change", this.handleTextTrackChange_), o.removeEventListener("addtrack", this.handleTextTrackAdd_), o.removeEventListener("removetrack", this.handleTextTrackRemove_));
                        for (var i = n.length; i--;) n.removeTrack_(n[i]);
                        e.disposeMediaElement(this.el_), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function() {
                        var t = this.options_.tag;
                        if (!t || this.movingMediaElementInDOM === !1)
                            if (t) {
                                var o = t.cloneNode(!0);
                                t.parentNode.insertBefore(o, t), e.disposeMediaElement(t), t = o
                            } else {
                                t = w["default"].createElement("video");
                                var n = this.options_.tag && f.getElAttributes(this.options_.tag),
                                    i = C["default"]({}, n);
                                b.TOUCH_ENABLED && this.options_.nativeControlsForTouch === !0 || delete i.controls, f.setElAttributes(t, T["default"](i, {
                                    id: this.options_.techId,
                                    "class": "vjs-tech"
                                }))
                            }
                        for (var r = ["autoplay", "preload", "loop", "muted"], s = r.length - 1; s >= 0; s--) {
                            var a = r[s],
                                l = {};
                            "undefined" != typeof this.options_[a] && (l[a] = this.options_[a]), f.setElAttributes(t, l)
                        }
                        return t
                    }, e.prototype.handleLateInit_ = function(t) {
                        var e = this;
                        if (0 !== t.networkState && 3 !== t.networkState) {
                            if (0 === t.readyState) {
                                var o = function() {
                                    var t = !1,
                                        o = function() {
                                            t = !0
                                        };
                                    e.on("loadstart", o);
                                    var n = function() {
                                        t || this.trigger("loadstart")
                                    };
                                    return e.on("loadedmetadata", n), e.ready(function() {
                                        this.off("loadstart", o), this.off("loadedmetadata", n), t || this.trigger("loadstart")
                                    }), {
                                        v: void 0
                                    }
                                }();
                                if ("object" == typeof o) return o.v
                            }
                            var n = ["loadstart"];
                            n.push("loadedmetadata"), t.readyState >= 2 && n.push("loadeddata"), t.readyState >= 3 && n.push("canplay"), t.readyState >= 4 && n.push("canplaythrough"), this.ready(function() {
                                n.forEach(function(t) {
                                    this.trigger(t)
                                }, this)
                            })
                        }
                    }, e.prototype.proxyNativeTextTracks_ = function() {
                        var t = this.el().textTracks;
                        if (t) {
                            for (var e = 0; e < t.length; e++) this.textTracks().addTrack_(t[e]);
                            t.addEventListener && (t.addEventListener("change", this.handleTextTrackChange_), t.addEventListener("addtrack", this.handleTextTrackAdd_), t.addEventListener("removetrack", this.handleTextTrackRemove_))
                        }
                    }, e.prototype.handleTextTrackChange = function(t) {
                        var e = this.textTracks();
                        this.textTracks().trigger({
                            type: "change",
                            target: e,
                            currentTarget: e,
                            srcElement: e
                        })
                    }, e.prototype.handleTextTrackAdd = function(t) {
                        this.textTracks().addTrack_(t.track)
                    }, e.prototype.handleTextTrackRemove = function(t) {
                        this.textTracks().removeTrack_(t.track)
                    }, e.prototype.play = function() {
                        this.el_.play()
                    }, e.prototype.pause = function() {
                        this.el_.pause()
                    }, e.prototype.paused = function() {
                        return this.el_.paused
                    }, e.prototype.currentTime = function() {
                        return this.el_.currentTime
                    }, e.prototype.setCurrentTime = function(t) {
                        try {
                            this.el_.currentTime = t
                        } catch (e) {
                            m["default"](e, "Video is not ready. (Video.js)")
                        }
                    }, e.prototype.duration = function() {
                        return this.el_.duration || 0
                    }, e.prototype.buffered = function() {
                        return this.el_.buffered
                    }, e.prototype.volume = function() {
                        return this.el_.volume
                    }, e.prototype.setVolume = function(t) {
                        this.el_.volume = t
                    }, e.prototype.muted = function() {
                        return this.el_.muted
                    }, e.prototype.setMuted = function(t) {
                        this.el_.muted = t
                    }, e.prototype.width = function() {
                        return this.el_.offsetWidth
                    }, e.prototype.height = function() {
                        return this.el_.offsetHeight
                    }, e.prototype.supportsFullScreen = function() {
                        if ("function" == typeof this.el_.webkitEnterFullScreen) {
                            var t = _["default"].navigator.userAgent;
                            if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                        }
                        return !1
                    }, e.prototype.enterFullScreen = function() {
                        var t = this.el_;
                        "webkitDisplayingFullscreen" in t && this.one("webkitbeginfullscreen", function() {
                            this.one("webkitendfullscreen", function() {
                                this.trigger("fullscreenchange", {
                                    isFullscreen: !1
                                })
                            }), this.trigger("fullscreenchange", {
                                isFullscreen: !0
                            })
                        }), t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                            t.pause(), t.webkitEnterFullScreen()
                        }, 0)) : t.webkitEnterFullScreen()
                    }, e.prototype.exitFullScreen = function() {
                        this.el_.webkitExitFullScreen()
                    }, e.prototype.src = function(t) {
                        return void 0 === t ? this.el_.src : void this.setSrc(t)
                    }, e.prototype.setSrc = function(t) {
                        this.el_.src = t
                    }, e.prototype.load = function() {
                        this.el_.load()
                    }, e.prototype.reset = function() {
                        e.resetMediaElement(this.el_)
                    }, e.prototype.currentSrc = function() {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                    }, e.prototype.poster = function() {
                        return this.el_.poster
                    }, e.prototype.setPoster = function(t) {
                        this.el_.poster = t
                    }, e.prototype.preload = function() {
                        return this.el_.preload
                    }, e.prototype.setPreload = function(t) {
                        this.el_.preload = t
                    }, e.prototype.autoplay = function() {
                        return this.el_.autoplay
                    }, e.prototype.setAutoplay = function(t) {
                        this.el_.autoplay = t
                    }, e.prototype.controls = function() {
                        return this.el_.controls
                    }, e.prototype.setControls = function(t) {
                        this.el_.controls = !!t
                    }, e.prototype.loop = function() {
                        return this.el_.loop
                    }, e.prototype.setLoop = function(t) {
                        this.el_.loop = t
                    }, e.prototype.error = function() {
                        return this.el_.error
                    }, e.prototype.seeking = function() {
                        return this.el_.seeking
                    }, e.prototype.seekable = function() {
                        return this.el_.seekable
                    }, e.prototype.ended = function() {
                        return this.el_.ended
                    }, e.prototype.defaultMuted = function() {
                        return this.el_.defaultMuted
                    }, e.prototype.playbackRate = function() {
                        return this.el_.playbackRate
                    }, e.prototype.played = function() {
                        return this.el_.played
                    }, e.prototype.setPlaybackRate = function(t) {
                        this.el_.playbackRate = t
                    }, e.prototype.networkState = function() {
                        return this.el_.networkState
                    }, e.prototype.readyState = function() {
                        return this.el_.readyState
                    }, e.prototype.videoWidth = function() {
                        return this.el_.videoWidth
                    }, e.prototype.videoHeight = function() {
                        return this.el_.videoHeight
                    }, e.prototype.textTracks = function() {
                        return t.prototype.textTracks.call(this)
                    }, e.prototype.addTextTrack = function(e, o, n) {
                        return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, o, n) : t.prototype.addTextTrack.call(this, e, o, n)
                    }, e.prototype.addRemoteTextTrack = function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        if (!this.featuresNativeTextTracks) return t.prototype.addRemoteTextTrack.call(this, e);
                        var o = w["default"].createElement("track");
                        return e.kind && (o.kind = e.kind), e.label && (o.label = e.label), (e.language || e.srclang) && (o.srclang = e.language || e.srclang), e["default"] && (o["default"] = e["default"]), e.id && (o.id = e.id), e.src && (o.src = e.src), this.el().appendChild(o), this.remoteTextTrackEls().addTrackElement_(o), this.remoteTextTracks().addTrack_(o.track), o
                    }, e.prototype.removeRemoteTextTrack = function(e) {
                        if (!this.featuresNativeTextTracks) return t.prototype.removeRemoteTextTrack.call(this, e);
                        var o = void 0,
                            n = void 0,
                            i = this.remoteTextTrackEls().getTrackElementByTrack_(e);
                        for (this.remoteTextTrackEls().removeTrackElement_(i), this.remoteTextTracks().removeTrack_(e), o = this.$$("track"), n = o.length; n--;) e !== o[n] && e !== o[n].track || this.el().removeChild(o[n])
                    }, e
                }(l["default"]);
            S.TEST_VID = w["default"].createElement("video");
            var O = w["default"].createElement("track");
            O.kind = "captions", O.srclang = "en", O.label = "English", S.TEST_VID.appendChild(O), S.isSupported = function() {
                try {
                    S.TEST_VID.volume = .5
                } catch (t) {
                    return !1
                }
                return !!S.TEST_VID.canPlayType
            }, l["default"].withSourceHandlers(S), S.nativeSourceHandler = {}, S.nativeSourceHandler.canPlayType = function(t) {
                try {
                    return S.TEST_VID.canPlayType(t)
                } catch (e) {
                    return ""
                }
            }, S.nativeSourceHandler.canHandleSource = function(t) {
                var e;
                return t.type ? S.nativeSourceHandler.canPlayType(t.type) : t.src ? (e = d.getFileExtension(t.src), S.nativeSourceHandler.canPlayType("video/" + e)) : ""
            }, S.nativeSourceHandler.handleSource = function(t, e) {
                e.setSrc(t.src)
            }, S.nativeSourceHandler.dispose = function() {}, S.registerSourceHandler(S.nativeSourceHandler), S.canControlVolume = function() {
                var t = S.TEST_VID.volume;
                return S.TEST_VID.volume = t / 2 + .1, t !== S.TEST_VID.volume
            }, S.canControlPlaybackRate = function() {
                var t = S.TEST_VID.playbackRate;
                return S.TEST_VID.playbackRate = t / 2 + .1, t !== S.TEST_VID.playbackRate
            }, S.supportsNativeTextTracks = function() {
                var t;
                return t = !!S.TEST_VID.textTracks, t && S.TEST_VID.textTracks.length > 0 && (t = "number" != typeof S.TEST_VID.textTracks[0].mode), t && b.IS_FIREFOX && (t = !1), !t || "onremovetrack" in S.TEST_VID.textTracks || (t = !1), t
            }, S.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "volumechange"], S.prototype.featuresVolumeControl = S.canControlVolume(), S.prototype.featuresPlaybackRate = S.canControlPlaybackRate(), S.prototype.movingMediaElementInDOM = !b.IS_IOS, S.prototype.featuresFullscreenResize = !0, S.prototype.featuresProgressEvents = !0, S.prototype.featuresNativeTextTracks = S.supportsNativeTextTracks();
            var B = void 0,
                P = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
                M = /^video\/mp4/i;
            S.patchCanPlayType = function() {
                b.ANDROID_VERSION >= 4 && (B || (B = S.TEST_VID.constructor.prototype.canPlayType), S.TEST_VID.constructor.prototype.canPlayType = function(t) {
                    return t && P.test(t) ? "maybe" : B.call(this, t)
                }), b.IS_OLD_ANDROID && (B || (B = S.TEST_VID.constructor.prototype.canPlayType), S.TEST_VID.constructor.prototype.canPlayType = function(t) {
                    return t && M.test(t) ? "maybe" : B.call(this, t)
                })
            }, S.unpatchCanPlayType = function() {
                var t = S.TEST_VID.constructor.prototype.canPlayType;
                return S.TEST_VID.constructor.prototype.canPlayType = B, B = null, t
            }, S.patchCanPlayType(), S.disposeMediaElement = function(t) {
                if (t) {
                    for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.removeAttribute("src"), "function" == typeof t.load && ! function() {
                        try {
                            t.load()
                        } catch (e) {}
                    }()
                }
            }, S.resetMediaElement = function(t) {
                if (t) {
                    for (var e = t.querySelectorAll("source"), o = e.length; o--;) t.removeChild(e[o]);
                    t.removeAttribute("src"), "function" == typeof t.load && ! function() {
                        try {
                            t.load()
                        } catch (e) {}
                    }()
                }
            }, c["default"].registerComponent("Html5", S), l["default"].registerTech("Html5", S), o["default"] = S, e.exports = o["default"]
        }, {
            "../component": 67,
            "../utils/browser.js": 129,
            "../utils/dom.js": 132,
            "../utils/fn.js": 134,
            "../utils/log.js": 137,
            "../utils/merge-options.js": 138,
            "../utils/url.js": 142,
            "./tech.js": 119,
            "global/document": 1,
            "global/window": 2,
            "object.assign": 45
        }],
        118: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var s = t("../component.js"),
                a = n(s),
                l = t("./tech.js"),
                u = n(l),
                c = t("global/window"),
                p = (n(c), t("../utils/to-title-case.js")),
                f = n(p),
                h = function(t) {
                    function e(o, n, r) {
                        if (i(this, e), t.call(this, o, n, r), n.playerOptions.sources && 0 !== n.playerOptions.sources.length) o.src(n.playerOptions.sources);
                        else
                            for (var s = 0, l = n.playerOptions.techOrder; s < l.length; s++) {
                                var c = f["default"](l[s]),
                                    p = u["default"].getTech(c);
                                if (c || (p = a["default"].getComponent(c)), p && p.isSupported()) {
                                    o.loadTech_(c);
                                    break
                                }
                            }
                    }
                    return r(e, t), e
                }(a["default"]);
            a["default"].registerComponent("MediaLoader", h), o["default"] = h, e.exports = o["default"]
        }, {
            "../component.js": 67,
            "../utils/to-title-case.js": 141,
            "./tech.js": 119,
            "global/window": 2
        }],
        119: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../component"),
                l = i(a),
                u = t("../tracks/html-track-element"),
                c = i(u),
                p = t("../tracks/html-track-element-list"),
                f = i(p),
                h = t("../utils/merge-options.js"),
                d = i(h),
                v = t("../tracks/text-track"),
                g = i(v),
                y = t("../tracks/text-track-list"),
                m = i(y),
                A = t("../utils/fn.js"),
                b = n(A),
                j = t("../utils/log.js"),
                w = i(j),
                k = t("../utils/time-ranges.js"),
                _ = t("../utils/buffer.js"),
                x = t("../media-error.js"),
                T = i(x),
                E = t("global/window"),
                C = i(E),
                S = t("global/document"),
                O = i(S),
                B = function(t) {
                    function e() {
                        var o = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            n = arguments.length <= 1 || void 0 === arguments[1] ? function() {} : arguments[1];
                        r(this, e), o.reportTouchActivity = !1, t.call(this, null, o, n), this.hasStarted_ = !1, this.on("playing", function() {
                            this.hasStarted_ = !0
                        }), this.on("loadstart", function() {
                            this.hasStarted_ = !1
                        }), this.textTracks_ = o.textTracks, this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), o.nativeCaptions !== !1 && o.nativeTextTracks !== !1 || (this.featuresNativeTextTracks = !1), this.featuresNativeTextTracks || this.on("ready", this.emulateTextTracks), this.initTextTrackListeners(), this.emitTapEvents()
                    }
                    return s(e, t), e.prototype.manualProgressOn = function() {
                        this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                    }, e.prototype.manualProgressOff = function() {
                        this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                    }, e.prototype.trackProgress = function() {
                        this.stopTrackingProgress(), this.progressInterval = this.setInterval(b.bind(this, function() {
                            var t = this.bufferedPercent();
                            this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
                        }), 500)
                    }, e.prototype.onDurationChange = function() {
                        this.duration_ = this.duration()
                    }, e.prototype.buffered = function() {
                        return k.createTimeRange(0, 0)
                    }, e.prototype.bufferedPercent = function() {
                        return _.bufferedPercent(this.buffered(), this.duration_)
                    }, e.prototype.stopTrackingProgress = function() {
                        this.clearInterval(this.progressInterval)
                    }, e.prototype.manualTimeUpdatesOn = function() {
                        this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                    }, e.prototype.manualTimeUpdatesOff = function() {
                        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                    }, e.prototype.trackCurrentTime = function() {
                        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                            this.trigger({
                                type: "timeupdate",
                                target: this,
                                manuallyTriggered: !0
                            })
                        }, 250)
                    }, e.prototype.stopTrackingCurrentTime = function() {
                        this.clearInterval(this.currentTimeInterval), this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, e.prototype.dispose = function() {
                        var e = this.textTracks();
                        if (e)
                            for (var o = e.length; o--;) this.removeRemoteTextTrack(e[o]);
                        this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
                    }, e.prototype.reset = function() {}, e.prototype.error = function(t) {
                        return void 0 !== t && (t instanceof T["default"] ? this.error_ = t : this.error_ = new T["default"](t), this.trigger("error")), this.error_
                    }, e.prototype.played = function() {
                        return this.hasStarted_ ? k.createTimeRange(0, 0) : k.createTimeRange()
                    }, e.prototype.setCurrentTime = function() {
                        this.manualTimeUpdates && this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, e.prototype.initTextTrackListeners = function() {
                        var t = b.bind(this, function() {
                                this.trigger("texttrackchange")
                            }),
                            e = this.textTracks();
                        e && (e.addEventListener("removetrack", t), e.addEventListener("addtrack", t), this.on("dispose", b.bind(this, function() {
                            e.removeEventListener("removetrack", t), e.removeEventListener("addtrack", t)
                        })))
                    }, e.prototype.emulateTextTracks = function() {
                        var t = this,
                            e = this.textTracks();
                        if (e) {
                            C["default"].WebVTT || null == this.el().parentNode || ! function() {
                                var e = O["default"].createElement("script");
                                e.src = t.options_["vtt.js"] || "https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js", e.onload = function() {
                                    t.trigger("vttjsloaded")
                                }, e.onerror = function() {
                                    t.trigger("vttjserror")
                                }, t.on("dispose", function() {
                                    e.onload = null, e.onerror = null
                                }), t.el().parentNode.appendChild(e), C["default"].WebVTT = !0
                            }();
                            var o = function() {
                                    return t.trigger("texttrackchange")
                                },
                                n = function() {
                                    o();
                                    for (var t = 0; t < e.length; t++) {
                                        var n = e[t];
                                        n.removeEventListener("cuechange", o), "showing" === n.mode && n.addEventListener("cuechange", o)
                                    }
                                };
                            n(), e.addEventListener("change", n), this.on("dispose", function() {
                                e.removeEventListener("change", n)
                            })
                        }
                    }, e.prototype.textTracks = function() {
                        return this.textTracks_ = this.textTracks_ || new m["default"], this.textTracks_
                    }, e.prototype.remoteTextTracks = function() {
                        return this.remoteTextTracks_ = this.remoteTextTracks_ || new m["default"], this.remoteTextTracks_
                    }, e.prototype.remoteTextTrackEls = function() {
                        return this.remoteTextTrackEls_ = this.remoteTextTrackEls_ || new f["default"], this.remoteTextTrackEls_
                    }, e.prototype.addTextTrack = function(t, e, o) {
                        if (!t) throw new Error("TextTrack kind is required but was not provided");
                        return P(this, t, e, o)
                    }, e.prototype.addRemoteTextTrack = function(t) {
                        var e = d["default"](t, {
                                tech: this
                            }),
                            o = new c["default"](e);
                        return this.remoteTextTrackEls().addTrackElement_(o), this.remoteTextTracks().addTrack_(o.track), this.textTracks().addTrack_(o.track), o
                    }, e.prototype.removeRemoteTextTrack = function(t) {
                        this.textTracks().removeTrack_(t);
                        var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
                        this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack_(t)
                    }, e.prototype.setPoster = function() {}, e.prototype.canPlayType = function() {
                        return ""
                    }, e.isTech = function(t) {
                        return t.prototype instanceof e || t instanceof e || t === e
                    }, e.registerTech = function(t, o) {
                        if (e.techs_ || (e.techs_ = {}), !e.isTech(o)) throw new Error("Tech " + t + " must be a Tech");
                        return e.techs_[t] = o, o
                    }, e.getTech = function(t) {
                        return e.techs_ && e.techs_[t] ? e.techs_[t] : C["default"] && C["default"].videojs && C["default"].videojs[t] ? (w["default"].warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), C["default"].videojs[t]) : void 0
                    }, e
                }(l["default"]);
            B.prototype.textTracks_;
            var P = function(t, e, o, n) {
                var i = arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4],
                    r = t.textTracks();
                i.kind = e, o && (i.label = o), n && (i.language = n), i.tech = t;
                var s = new g["default"](i);
                return r.addTrack_(s), s
            };
            B.prototype.featuresVolumeControl = !0, B.prototype.featuresFullscreenResize = !1, B.prototype.featuresPlaybackRate = !1, B.prototype.featuresProgressEvents = !1, B.prototype.featuresTimeupdateEvents = !1, B.prototype.featuresNativeTextTracks = !1, B.withSourceHandlers = function(t) {
                t.registerSourceHandler = function(e, o) {
                    var n = t.sourceHandlers;
                    n || (n = t.sourceHandlers = []), void 0 === o && (o = n.length), n.splice(o, 0, e)
                }, t.canPlayType = function(e) {
                    for (var o = t.sourceHandlers || [], n = void 0, i = 0; i < o.length; i++)
                        if (n = o[i].canPlayType(e)) return n;
                    return ""
                }, t.selectSourceHandler = function(e) {
                    for (var o = t.sourceHandlers || [], n = void 0, i = 0; i < o.length; i++)
                        if (n = o[i].canHandleSource(e)) return o[i];
                    return null
                }, t.canPlaySource = function(e) {
                    var o = t.selectSourceHandler(e);
                    return o ? o.canHandleSource(e) : ""
                };
                var e = ["seekable", "duration"];
                e.forEach(function(t) {
                    var e = this[t];
                    "function" == typeof e && (this[t] = function() {
                        return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
                    })
                }, t.prototype), t.prototype.setSource = function(e) {
                    var o = t.selectSourceHandler(e);
                    return o || (t.nativeSourceHandler ? o = t.nativeSourceHandler : w["default"].error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), this.currentSource_ = e, this.sourceHandler_ = o.handleSource(e, this), this.on("dispose", this.disposeSourceHandler), this
                }, t.prototype.disposeSourceHandler = function() {
                    this.sourceHandler_ && this.sourceHandler_.dispose && this.sourceHandler_.dispose()
                }
            }, l["default"].registerComponent("Tech", B), l["default"].registerComponent("MediaTechController", B), B.registerTech("Tech", B), o["default"] = B, e.exports = o["default"]
        }, {
            "../component": 67,
            "../media-error.js": 103,
            "../tracks/html-track-element": 121,
            "../tracks/html-track-element-list": 120,
            "../tracks/text-track": 128,
            "../tracks/text-track-list": 126,
            "../utils/buffer.js": 130,
            "../utils/fn.js": 134,
            "../utils/log.js": 137,
            "../utils/merge-options.js": 138,
            "../utils/time-ranges.js": 140,
            "global/document": 1,
            "global/window": 2
        }],
        120: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            o.__esModule = !0;
            var s = t("../utils/browser.js"),
                a = i(s),
                l = t("global/document"),
                u = n(l),
                c = function() {
                    function t() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                        r(this, t);
                        var o = this;
                        if (a.IS_IE8) {
                            o = u["default"].createElement("custom");
                            for (var n in t.prototype) "constructor" !== n && (o[n] = t.prototype[n])
                        }
                        o.trackElements_ = [], Object.defineProperty(o, "length", {
                            get: function() {
                                return this.trackElements_.length
                            }
                        });
                        for (var i = 0, s = e.length; i < s; i++) o.addTrackElement_(e[i]);
                        if (a.IS_IE8) return o
                    }
                    return t.prototype.addTrackElement_ = function(t) {
                        this.trackElements_.push(t)
                    }, t.prototype.getTrackElementByTrack_ = function(t) {
                        for (var e = void 0, o = 0, n = this.trackElements_.length; o < n; o++)
                            if (t === this.trackElements_[o].track) {
                                e = this.trackElements_[o];
                                break
                            }
                        return e
                    }, t.prototype.removeTrackElement_ = function(t) {
                        for (var e = 0, o = this.trackElements_.length; e < o; e++)
                            if (t === this.trackElements_[e]) {
                                this.trackElements_.splice(e, 1);
                                break
                            }
                    }, t
                }();
            o["default"] = c, e.exports = o["default"]
        }, {
            "../utils/browser.js": 129,
            "global/document": 1
        }],
        121: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../utils/browser.js"),
                l = i(a),
                u = t("global/document"),
                c = n(u),
                p = t("../event-target"),
                f = n(p),
                h = t("../tracks/text-track"),
                d = n(h),
                v = 0,
                g = 1,
                y = 2,
                m = 3,
                A = function(t) {
                    function e() {
                        var o = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        r(this, e), t.call(this);
                        var n = void 0,
                            i = this;
                        if (l.IS_IE8) {
                            i = c["default"].createElement("custom");
                            for (var s in e.prototype) "constructor" !== s && (i[s] = e.prototype[s])
                        }
                        var a = new d["default"](o);
                        if (i.kind = a.kind, i.src = a.src, i.srclang = a.language, i.label = a.label, i["default"] = a["default"], Object.defineProperty(i, "readyState", {
                                get: function() {
                                    return n
                                }
                            }), Object.defineProperty(i, "track", {
                                get: function() {
                                    return a
                                }
                            }), n = v, a.addEventListener("loadeddata", function() {
                                n = y, i.trigger({
                                    type: "load",
                                    target: i
                                })
                            }), l.IS_IE8) return i
                    }
                    return s(e, t), e
                }(f["default"]);
            A.prototype.allowedEvents_ = {
                load: "load"
            }, A.NONE = v, A.LOADING = g, A.LOADED = y, A.ERROR = m, o["default"] = A, e.exports = o["default"]
        }, {
            "../event-target": 99,
            "../tracks/text-track": 128,
            "../utils/browser.js": 129,
            "global/document": 1
        }],
        122: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            o.__esModule = !0;
            var s = t("../utils/browser.js"),
                a = i(s),
                l = t("global/document"),
                u = n(l),
                c = function() {
                    function t(e) {
                        r(this, t);
                        var o = this;
                        if (a.IS_IE8) {
                            o = u["default"].createElement("custom");
                            for (var n in t.prototype) "constructor" !== n && (o[n] = t.prototype[n])
                        }
                        if (t.prototype.setCues_.call(o, e), Object.defineProperty(o, "length", {
                                get: function() {
                                    return this.length_
                                }
                            }), a.IS_IE8) return o
                    }
                    return t.prototype.setCues_ = function(t) {
                        var e = this.length || 0,
                            o = 0,
                            n = t.length;
                        this.cues_ = t, this.length_ = t.length;
                        var i = function(t) {
                            "" + t in this || Object.defineProperty(this, "" + t, {
                                get: function() {
                                    return this.cues_[t]
                                }
                            })
                        };
                        if (e < n)
                            for (o = e; o < n; o++) i.call(this, o)
                    }, t.prototype.getCueById = function(t) {
                        for (var e = null, o = 0, n = this.length; o < n; o++) {
                            var i = this[o];
                            if (i.id === t) {
                                e = i;
                                break
                            }
                        }
                        return e
                    }, t
                }();
            o["default"] = c, e.exports = o["default"]
        }, {
            "../utils/browser.js": 129,
            "global/document": 1
        }],
        123: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function a(t, e) {
                return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
            }

            function l(t, e, o) {
                try {
                    t.style[e] = o
                } catch (n) {}
            }
            o.__esModule = !0;
            var u = t("../component"),
                c = i(u),
                p = t("../menu/menu.js"),
                f = (i(p), t("../menu/menu-item.js")),
                h = (i(f), t("../menu/menu-button.js")),
                d = (i(h), t("../utils/fn.js")),
                v = n(d),
                g = t("global/document"),
                y = (i(g), t("global/window")),
                m = i(y),
                A = "#222",
                b = "#ccc",
                j = {
                    monospace: "monospace",
                    sansSerif: "sans-serif",
                    serif: "serif",
                    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                    monospaceSerif: '"Courier New", monospace',
                    proportionalSansSerif: "sans-serif",
                    proportionalSerif: "serif",
                    casual: '"Comic Sans MS", Impact, fantasy',
                    script: '"Monotype Corsiva", cursive',
                    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                },
                w = function(t) {
                    function e(o, n, i) {
                        r(this, e), t.call(this, o, n, i), o.on("loadstart", v.bind(this, this.toggleDisplay)), o.on("texttrackchange", v.bind(this, this.updateDisplay)), o.ready(v.bind(this, function() {
                            if (o.tech_ && o.tech_.featuresNativeTextTracks) return void this.hide();
                            o.on("fullscreenchange", v.bind(this, this.updateDisplay));
                            for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) {
                                var n = t[e];
                                this.player_.addRemoteTextTrack(n)
                            }
                        }))
                    }
                    return s(e, t), e.prototype.toggleDisplay = function() {
                        this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                    }, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-text-track-display"
                        })
                    }, e.prototype.clearDisplay = function() {
                        "function" == typeof m["default"].WebVTT && m["default"].WebVTT.processCues(m["default"], [], this.el_)
                    }, e.prototype.updateDisplay = function() {
                        var t = this.player_.textTracks();
                        if (this.clearDisplay(), t)
                            for (var e = 0; e < t.length; e++) {
                                var o = t[e];
                                "showing" === o.mode && this.updateForTrack(o)
                            }
                    }, e.prototype.updateForTrack = function(t) {
                        if ("function" == typeof m["default"].WebVTT && t.activeCues) {
                            for (var e = this.player_.textTrackSettings.getValues(), o = [], n = 0; n < t.activeCues.length; n++) o.push(t.activeCues[n]);
                            m["default"].WebVTT.processCues(m["default"], t.activeCues, this.el_);
                            for (var i = o.length; i--;) {
                                var r = o[i];
                                if (r) {
                                    var s = r.displayState;
                                    if (e.color && (s.firstChild.style.color = e.color), e.textOpacity && l(s.firstChild, "color", a(e.color || "#fff", e.textOpacity)), e.backgroundColor && (s.firstChild.style.backgroundColor = e.backgroundColor), e.backgroundOpacity && l(s.firstChild, "backgroundColor", a(e.backgroundColor || "#000", e.backgroundOpacity)), e.windowColor && (e.windowOpacity ? l(s, "backgroundColor", a(e.windowColor, e.windowOpacity)) : s.style.backgroundColor = e.windowColor), e.edgeStyle && ("dropshadow" === e.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px " + A + ", 2px 2px 4px " + A + ", 2px 2px 5px " + A : "raised" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px " + A + ", 2px 2px " + A + ", 3px 3px " + A : "depressed" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px " + b + ", 0 1px " + b + ", -1px -1px " + A + ", 0 -1px " + A : "uniform" === e.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px " + A + ", 0 0 4px " + A + ", 0 0 4px " + A + ", 0 0 4px " + A)), e.fontPercent && 1 !== e.fontPercent) {
                                        var u = m["default"].parseFloat(s.style.fontSize);
                                        s.style.fontSize = u * e.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
                                    }
                                    e.fontFamily && "default" !== e.fontFamily && ("small-caps" === e.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = j[e.fontFamily])
                                }
                            }
                        }
                    }, e
                }(c["default"]);
            c["default"].registerComponent("TextTrackDisplay", w), o["default"] = w, e.exports = o["default"]
        }, {
            "../component": 67,
            "../menu/menu-button.js": 104,
            "../menu/menu-item.js": 105,
            "../menu/menu.js": 106,
            "../utils/fn.js": 134,
            "global/document": 1,
            "global/window": 2
        }],
        124: [function(t, e, o) {
            "use strict";
            o.__esModule = !0;
            var n = {
                    disabled: "disabled",
                    hidden: "hidden",
                    showing: "showing"
                },
                i = {
                    subtitles: "subtitles",
                    captions: "captions",
                    descriptions: "descriptions",
                    chapters: "chapters",
                    metadata: "metadata"
                };
            o.TextTrackMode = n, o.TextTrackKind = i
        }, {}],
        125: [function(t, e, o) {
            "use strict";
            o.__esModule = !0;
            var n = function(t) {
                    var e = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(e, o, n) {
                        return t[o] && (e[o] = t[o]), e
                    }, {
                        cues: t.cues && Array.prototype.map.call(t.cues, function(t) {
                            return {
                                startTime: t.startTime,
                                endTime: t.endTime,
                                text: t.text,
                                id: t.id
                            }
                        })
                    });
                    return e
                },
                i = function(t) {
                    var e = t.$$("track"),
                        o = Array.prototype.map.call(e, function(t) {
                            return t.track
                        }),
                        i = Array.prototype.map.call(e, function(t) {
                            var e = n(t.track);
                            return t.src && (e.src = t.src), e
                        });
                    return i.concat(Array.prototype.filter.call(t.textTracks(), function(t) {
                        return o.indexOf(t) === -1
                    }).map(n))
                },
                r = function(t, e) {
                    return t.forEach(function(t) {
                        var o = e.addRemoteTextTrack(t).track;
                        !t.src && t.cues && t.cues.forEach(function(t) {
                            return o.addCue(t)
                        })
                    }), e.textTracks()
                };
            o["default"] = {
                textTracksToJson: i,
                jsonToTextTracks: r,
                trackToJson_: n
            }, e.exports = o["default"]
        }, {}],
        126: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("../event-target"),
                l = i(a),
                u = t("../utils/fn.js"),
                c = n(u),
                p = t("../utils/browser.js"),
                f = n(p),
                h = t("global/document"),
                d = i(h),
                v = function(t) {
                    function e() {
                        var o = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                        r(this, e), t.call(this);
                        var n = this;
                        if (f.IS_IE8) {
                            n = d["default"].createElement("custom");
                            for (var i in e.prototype) "constructor" !== i && (n[i] = e.prototype[i])
                        }
                        n.tracks_ = [], Object.defineProperty(n, "length", {
                            get: function() {
                                return this.tracks_.length
                            }
                        });
                        for (var s = 0; s < o.length; s++) n.addTrack_(o[s]);
                        if (f.IS_IE8) return n
                    }
                    return s(e, t), e.prototype.addTrack_ = function(t) {
                        var e = this.tracks_.length;
                        "" + e in this || Object.defineProperty(this, e, {
                            get: function() {
                                return this.tracks_[e]
                            }
                        }), t.addEventListener("modechange", c.bind(this, function() {
                            this.trigger("change")
                        })), this.tracks_.indexOf(t) === -1 && (this.tracks_.push(t), this.trigger({
                            track: t,
                            type: "addtrack"
                        }))
                    }, e.prototype.removeTrack_ = function(t) {
                        for (var e = void 0, o = 0, n = this.length; o < n; o++)
                            if (this[o] === t) {
                                e = this[o], e.off && e.off(), this.tracks_.splice(o, 1);
                                break
                            }
                        e && this.trigger({
                            track: e,
                            type: "removetrack"
                        })
                    }, e.prototype.getTrackById = function(t) {
                        for (var e = null, o = 0, n = this.length; o < n; o++) {
                            var i = this[o];
                            if (i.id === t) {
                                e = i;
                                break
                            }
                        }
                        return e
                    }, e
                }(l["default"]);
            v.prototype.allowedEvents_ = {
                change: "change",
                addtrack: "addtrack",
                removetrack: "removetrack"
            };
            for (var g in v.prototype.allowedEvents_) v.prototype["on" + g] = null;
            o["default"] = v, e.exports = o["default"]
        }, {
            "../event-target": 99,
            "../utils/browser.js": 129,
            "../utils/fn.js": 134,
            "global/document": 1
        }],
        127: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function a(t) {
                var e = void 0;
                return t.selectedOptions ? e = t.selectedOptions[0] : t.options && (e = t.options[t.options.selectedIndex]), e.value
            }

            function l(t, e) {
                if (e) {
                    var o = void 0;
                    for (o = 0; o < t.options.length; o++) {
                        var n = t.options[o];
                        if (n.value === e) break
                    }
                    t.selectedIndex = o
                }
            }

            function u() {
                var t = '<div class="vjs-tracksettings">\n      <div class="vjs-tracksettings-colors">\n        <div class="vjs-fg-color vjs-tracksetting">\n            <label class="vjs-label">Foreground</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-text-opacity vjs-opacity">\n              <select>\n                <option value="">---</option>\n                <option value="1">Opaque</option>\n                <option value="0.5">Semi-Opaque</option>\n              </select>\n            </span>\n        </div> <!-- vjs-fg-color -->\n        <div class="vjs-bg-color vjs-tracksetting">\n            <label class="vjs-label">Background</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-bg-opacity vjs-opacity">\n                <select>\n                  <option value="">---</option>\n                  <option value="1">Opaque</option>\n                  <option value="0.5">Semi-Transparent</option>\n                  <option value="0">Transparent</option>\n                </select>\n            </span>\n        </div> <!-- vjs-bg-color -->\n        <div class="window-color vjs-tracksetting">\n            <label class="vjs-label">Window</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-window-opacity vjs-opacity">\n                <select>\n                  <option value="">---</option>\n                  <option value="1">Opaque</option>\n                  <option value="0.5">Semi-Transparent</option>\n                  <option value="0">Transparent</option>\n                </select>\n            </span>\n        </div> <!-- vjs-window-color -->\n      </div> <!-- vjs-tracksettings -->\n      <div class="vjs-tracksettings-font">\n        <div class="vjs-font-percent vjs-tracksetting">\n          <label class="vjs-label">Font Size</label>\n          <select>\n            <option value="0.50">50%</option>\n            <option value="0.75">75%</option>\n            <option value="1.00" selected>100%</option>\n            <option value="1.25">125%</option>\n            <option value="1.50">150%</option>\n            <option value="1.75">175%</option>\n            <option value="2.00">200%</option>\n            <option value="3.00">300%</option>\n            <option value="4.00">400%</option>\n          </select>\n        </div> <!-- vjs-font-percent -->\n        <div class="vjs-edge-style vjs-tracksetting">\n          <label class="vjs-label">Text Edge Style</label>\n          <select>\n            <option value="none">None</option>\n            <option value="raised">Raised</option>\n            <option value="depressed">Depressed</option>\n            <option value="uniform">Uniform</option>\n            <option value="dropshadow">Dropshadow</option>\n          </select>\n        </div> <!-- vjs-edge-style -->\n        <div class="vjs-font-family vjs-tracksetting">\n          <label class="vjs-label">Font Family</label>\n          <select>\n            <option value="">Default</option>\n            <option value="monospaceSerif">Monospace Serif</option>\n            <option value="proportionalSerif">Proportional Serif</option>\n            <option value="monospaceSansSerif">Monospace Sans-Serif</option>\n            <option value="proportionalSansSerif">Proportional Sans-Serif</option>\n            <option value="casual">Casual</option>\n            <option value="script">Script</option>\n            <option value="small-caps">Small Caps</option>\n          </select>\n        </div> <!-- vjs-font-family -->\n      </div>\n    </div>\n    <div class="vjs-tracksettings-controls">\n      <button class="vjs-default-button">Defaults</button>\n      <button class="vjs-done-button">Done</button>\n    </div>';
                return t
            }
            o.__esModule = !0;
            var c = t("../component"),
                p = i(c),
                f = t("../utils/events.js"),
                h = n(f),
                d = t("../utils/fn.js"),
                v = n(d),
                g = t("../utils/log.js"),
                y = i(g),
                m = t("safe-json-parse/tuple"),
                A = i(m),
                b = t("global/window"),
                j = i(b),
                w = function(t) {
                    function e(o, n) {
                        r(this, e), t.call(this, o, n), this.hide(), void 0 === n.persistTextTrackSettings && (this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings), h.on(this.$(".vjs-done-button"), "click", v.bind(this, function() {
                            this.saveSettings(), this.hide()
                        })), h.on(this.$(".vjs-default-button"), "click", v.bind(this, function() {
                            this.$(".vjs-fg-color > select").selectedIndex = 0, this.$(".vjs-bg-color > select").selectedIndex = 0, this.$(".window-color > select").selectedIndex = 0, this.$(".vjs-text-opacity > select").selectedIndex = 0, this.$(".vjs-bg-opacity > select").selectedIndex = 0, this.$(".vjs-window-opacity > select").selectedIndex = 0, this.$(".vjs-edge-style select").selectedIndex = 0, this.$(".vjs-font-family select").selectedIndex = 0, this.$(".vjs-font-percent select").selectedIndex = 2, this.updateDisplay()
                        })), h.on(this.$(".vjs-fg-color > select"), "change", v.bind(this, this.updateDisplay)), h.on(this.$(".vjs-bg-color > select"), "change", v.bind(this, this.updateDisplay)), h.on(this.$(".window-color > select"), "change", v.bind(this, this.updateDisplay)), h.on(this.$(".vjs-text-opacity > select"), "change", v.bind(this, this.updateDisplay)), h.on(this.$(".vjs-bg-opacity > select"), "change", v.bind(this, this.updateDisplay)), h.on(this.$(".vjs-window-opacity > select"), "change", v.bind(this, this.updateDisplay)), h.on(this.$(".vjs-font-percent select"), "change", v.bind(this, this.updateDisplay)), h.on(this.$(".vjs-edge-style select"), "change", v.bind(this, this.updateDisplay)), h.on(this.$(".vjs-font-family select"), "change", v.bind(this, this.updateDisplay)), this.options_.persistTextTrackSettings && this.restoreSettings()
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-caption-settings vjs-modal-overlay",
                            innerHTML: u()
                        })
                    }, e.prototype.getValues = function() {
                        var t = a(this.$(".vjs-edge-style select")),
                            e = a(this.$(".vjs-font-family select")),
                            o = a(this.$(".vjs-fg-color > select")),
                            n = a(this.$(".vjs-text-opacity > select")),
                            i = a(this.$(".vjs-bg-color > select")),
                            r = a(this.$(".vjs-bg-opacity > select")),
                            s = a(this.$(".window-color > select")),
                            l = a(this.$(".vjs-window-opacity > select")),
                            u = j["default"].parseFloat(a(this.$(".vjs-font-percent > select"))),
                            c = {
                                backgroundOpacity: r,
                                textOpacity: n,
                                windowOpacity: l,
                                edgeStyle: t,
                                fontFamily: e,
                                color: o,
                                backgroundColor: i,
                                windowColor: s,
                                fontPercent: u
                            };
                        for (var p in c)("" === c[p] || "none" === c[p] || "fontPercent" === p && 1 === c[p]) && delete c[p];
                        return c
                    }, e.prototype.setValues = function(t) {
                        l(this.$(".vjs-edge-style select"), t.edgeStyle), l(this.$(".vjs-font-family select"), t.fontFamily), l(this.$(".vjs-fg-color > select"), t.color), l(this.$(".vjs-text-opacity > select"), t.textOpacity), l(this.$(".vjs-bg-color > select"), t.backgroundColor), l(this.$(".vjs-bg-opacity > select"), t.backgroundOpacity), l(this.$(".window-color > select"), t.windowColor), l(this.$(".vjs-window-opacity > select"), t.windowOpacity);
                        var e = t.fontPercent;
                        e && (e = e.toFixed(2)), l(this.$(".vjs-font-percent > select"), e)
                    }, e.prototype.restoreSettings = function() {
                        var t = void 0,
                            e = void 0;
                        try {
                            var o = A["default"](j["default"].localStorage.getItem("vjs-text-track-settings"));
                            t = o[0], e = o[1], t && y["default"].error(t)
                        } catch (n) {
                            y["default"].warn(n)
                        }
                        e && this.setValues(e)
                    }, e.prototype.saveSettings = function() {
                        if (this.options_.persistTextTrackSettings) {
                            var t = this.getValues();
                            try {
                                Object.getOwnPropertyNames(t).length > 0 ? j["default"].localStorage.setItem("vjs-text-track-settings", JSON.stringify(t)) : j["default"].localStorage.removeItem("vjs-text-track-settings")
                            } catch (e) {
                                y["default"].warn(e)
                            }
                        }
                    }, e.prototype.updateDisplay = function() {
                        var t = this.player_.getChild("textTrackDisplay");
                        t && t.updateDisplay()
                    }, e
                }(p["default"]);
            p["default"].registerComponent("TextTrackSettings", w), o["default"] = w, e.exports = o["default"]
        }, {
            "../component": 67,
            "../utils/events.js": 133,
            "../utils/fn.js": 134,
            "../utils/log.js": 137,
            "global/window": 2,
            "safe-json-parse/tuple": 54
        }],
        128: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t("./text-track-cue-list"),
                l = i(a),
                u = t("../utils/fn.js"),
                c = n(u),
                p = t("../utils/guid.js"),
                f = n(p),
                h = t("../utils/browser.js"),
                d = n(h),
                v = t("./text-track-enums"),
                g = n(v),
                y = t("../utils/log.js"),
                m = i(y),
                A = t("../event-target"),
                b = i(A),
                j = t("global/document"),
                w = i(j),
                k = t("global/window"),
                _ = i(k),
                x = t("../utils/url.js"),
                T = t("xhr"),
                E = i(T),
                C = function(t, e) {
                    var o = new _["default"].WebVTT.Parser(_["default"], _["default"].vttjs, _["default"].WebVTT.StringDecoder());
                    o.oncue = function(t) {
                        e.addCue(t)
                    }, o.onparsingerror = function(t) {
                        m["default"].error(t)
                    }, o.onflush = function() {
                        e.trigger({
                            type: "loadeddata",
                            target: e
                        })
                    }, o.parse(t), o.flush()
                },
                S = function(t, e) {
                    var o = {
                            uri: t
                        },
                        n = x.isCrossOrigin(t);
                    n && (o.cors = n), E["default"](o, c.bind(this, function(t, o, n) {
                        return t ? m["default"].error(t, o) : (e.loaded_ = !0, void("function" != typeof _["default"].WebVTT ? e.tech_ && ! function() {
                            var t = function() {
                                return C(n, e)
                            };
                            e.tech_.on("vttjsloaded", t), e.tech_.on("vttjserror", function() {
                                m["default"].error("vttjs failed to load, stopping trying to process " + e.src), e.tech_.off("vttjsloaded", t)
                            })
                        }() : C(n, e)))
                    }))
                },
                O = function(t) {
                    function e() {
                        var o = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        if (r(this, e), t.call(this), !o.tech) throw new Error("A tech was not provided.");
                        var n = this;
                        if (d.IS_IE8) {
                            n = w["default"].createElement("custom");
                            for (var i in e.prototype) "constructor" !== i && (n[i] = e.prototype[i])
                        }
                        n.tech_ = o.tech;
                        var s = g.TextTrackMode[o.mode] || "disabled",
                            a = g.TextTrackKind[o.kind] || "subtitles",
                            u = o.label || "",
                            p = o.language || o.srclang || "",
                            h = o.id || "vjs_text_track_" + f.newGUID();
                        "metadata" !== a && "chapters" !== a || (s = "hidden"), n.cues_ = [], n.activeCues_ = [];
                        var v = new l["default"](n.cues_),
                            y = new l["default"](n.activeCues_),
                            m = !1,
                            A = c.bind(n, function() {
                                this.activeCues, m && (this.trigger("cuechange"), m = !1)
                            });
                        if ("disabled" !== s && n.tech_.on("timeupdate", A), Object.defineProperty(n, "kind", {
                                get: function() {
                                    return a
                                },
                                set: function() {}
                            }), Object.defineProperty(n, "label", {
                                get: function() {
                                    return u
                                },
                                set: function() {}
                            }), Object.defineProperty(n, "language", {
                                get: function() {
                                    return p
                                },
                                set: function() {}
                            }), Object.defineProperty(n, "id", {
                                get: function() {
                                    return h
                                },
                                set: function() {}
                            }), Object.defineProperty(n, "mode", {
                                get: function() {
                                    return s
                                },
                                set: function(t) {
                                    g.TextTrackMode[t] && (s = t, "showing" === s && this.tech_.on("timeupdate", A), this.trigger("modechange"))
                                }
                            }), Object.defineProperty(n, "cues", {
                                get: function() {
                                    return this.loaded_ ? v : null
                                },
                                set: function() {}
                            }), Object.defineProperty(n, "activeCues", {
                                get: function() {
                                    if (!this.loaded_) return null;
                                    if (0 === this.cues.length) return y;
                                    for (var t = this.tech_.currentTime(), e = [], o = 0, n = this.cues.length; o < n; o++) {
                                        var i = this.cues[o];
                                        i.startTime <= t && i.endTime >= t ? e.push(i) : i.startTime === i.endTime && i.startTime <= t && i.startTime + .5 >= t && e.push(i)
                                    }
                                    if (m = !1, e.length !== this.activeCues_.length) m = !0;
                                    else
                                        for (var o = 0; o < e.length; o++) this.activeCues_.indexOf(e[o]) === -1 && (m = !0);
                                    return this.activeCues_ = e, y.setCues_(this.activeCues_), y
                                },
                                set: function() {}
                            }), o.src ? (n.src = o.src, S(o.src, n)) : n.loaded_ = !0, d.IS_IE8) return n
                    }
                    return s(e, t), e.prototype.addCue = function(t) {
                        var e = this.tech_.textTracks();
                        if (e)
                            for (var o = 0; o < e.length; o++) e[o] !== this && e[o].removeCue(t);
                        this.cues_.push(t), this.cues.setCues_(this.cues_)
                    }, e.prototype.removeCue = function(t) {
                        for (var e = !1, o = 0, n = this.cues_.length; o < n; o++) {
                            var i = this.cues_[o];
                            i === t && (this.cues_.splice(o, 1), e = !0)
                        }
                        e && this.cues.setCues_(this.cues_)
                    }, e
                }(b["default"]);
            O.prototype.allowedEvents_ = {
                cuechange: "cuechange"
            }, o["default"] = O, e.exports = o["default"]
        }, {
            "../event-target": 99,
            "../utils/browser.js": 129,
            "../utils/fn.js": 134,
            "../utils/guid.js": 136,
            "../utils/log.js": 137,
            "../utils/url.js": 142,
            "./text-track-cue-list": 122,
            "./text-track-enums": 124,
            "global/document": 1,
            "global/window": 2,
            xhr: 56
        }],
        129: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            var i = t("global/document"),
                r = n(i),
                s = t("global/window"),
                a = n(s),
                l = a["default"].navigator.userAgent,
                u = /AppleWebKit\/([\d.]+)/i.exec(l),
                c = u ? parseFloat(u.pop()) : null,
                p = /iPad/i.test(l);
            o.IS_IPAD = p;
            var f = /iPhone/i.test(l) && !p;
            o.IS_IPHONE = f;
            var h = /iPod/i.test(l);
            o.IS_IPOD = h;
            var d = f || p || h;
            o.IS_IOS = d;
            var v = function() {
                var t = l.match(/OS (\d+)_/i);
                if (t && t[1]) return t[1]
            }();
            o.IOS_VERSION = v;
            var g = /Android/i.test(l);
            o.IS_ANDROID = g;
            var y = function() {
                var t, e, o = l.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                return o ? (t = o[1] && parseFloat(o[1]), e = o[2] && parseFloat(o[2]), t && e ? parseFloat(o[1] + "." + o[2]) : t ? t : null) : null
            }();
            o.ANDROID_VERSION = y;
            var m = g && /webkit/i.test(l) && y < 2.3;
            o.IS_OLD_ANDROID = m;
            var A = g && y < 5 && c < 537;
            o.IS_NATIVE_ANDROID = A;
            var b = /Firefox/i.test(l);
            o.IS_FIREFOX = b;
            var j = /Chrome/i.test(l);
            o.IS_CHROME = j;
            var w = /MSIE\s8\.0/.test(l);
            o.IS_IE8 = w;
            var k = !!("ontouchstart" in a["default"] || a["default"].DocumentTouch && r["default"] instanceof a["default"].DocumentTouch);
            o.TOUCH_ENABLED = k;
            var _ = "backgroundSize" in r["default"].createElement("video").style;
            o.BACKGROUND_SIZE_SUPPORTED = _
        }, {
            "global/document": 1,
            "global/window": 2
        }],
        130: [function(t, e, o) {
            "use strict";

            function n(t, e) {
                var o, n, r = 0;
                if (!e) return 0;
                t && t.length || (t = i.createTimeRange(0, 0));
                for (var s = 0; s < t.length; s++) o = t.start(s), n = t.end(s), n > e && (n = e), r += n - o;
                return r / e
            }
            o.__esModule = !0, o.bufferedPercent = n;
            var i = t("./time-ranges.js")
        }, {
            "./time-ranges.js": 140
        }],
        131: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            var i = t("./log.js"),
                r = n(i),
                s = {
                    get: function(t, e) {
                        return t[e]
                    },
                    set: function(t, e, o) {
                        return t[e] = o, !0
                    }
                };
            o["default"] = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if ("function" == typeof Proxy) {
                    var o = function() {
                        var o = {};
                        return Object.keys(e).forEach(function(t) {
                            s.hasOwnProperty(t) && (o[t] = function() {
                                return r["default"].warn(e[t]), s[t].apply(this, arguments)
                            })
                        }), {
                            v: new Proxy(t, o)
                        }
                    }();
                    if ("object" == typeof o) return o.v
                }
                return t
            }, e.exports = o["default"]
        }, {
            "./log.js": 137
        }],
        132: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                return t.raw = e, t
            }

            function s(t) {
                return "string" == typeof t && /\S/.test(t)
            }

            function a(t) {
                if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
            }

            function l(t) {
                return new RegExp("(^|\\s)" + t + "($|\\s)")
            }

            function u(t) {
                return function(e, o) {
                    return s(e) ? (s(o) && (o = F["default"].querySelector(o)), (E(o) ? o : F["default"])[t](e)) : F["default"][t](null)
                }
            }

            function c(t) {
                return 0 === t.indexOf("#") && (t = t.slice(1)), F["default"].getElementById(t)
            }

            function p() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? "div" : arguments[0],
                    e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    o = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                    n = F["default"].createElement(t);
                return Object.getOwnPropertyNames(e).forEach(function(t) {
                    var o = e[t];
                    t.indexOf("aria-") !== -1 || "role" === t || "type" === t ? (Q["default"].warn(Y["default"](M, t, o)), n.setAttribute(t, o)) : n[t] = o
                }), Object.getOwnPropertyNames(o).forEach(function(t) {
                    o[t];
                    n.setAttribute(t, o[t])
                }), n
            }

            function f(t, e) {
                "undefined" == typeof t.textContent ? t.innerText = e : t.textContent = e
            }

            function h(t, e) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            }

            function d(t) {
                var e = t[U];
                return e || (e = t[U] = L.newGUID()), V[e] || (V[e] = {}), V[e]
            }

            function v(t) {
                var e = t[U];
                return !!e && !!Object.getOwnPropertyNames(V[e]).length
            }

            function g(t) {
                var e = t[U];
                if (e) {
                    delete V[e];
                    try {
                        delete t[U]
                    } catch (o) {
                        t.removeAttribute ? t.removeAttribute(U) : t[U] = null
                    }
                }
            }

            function y(t, e) {
                return t.classList ? t.classList.contains(e) : (a(e), l(e).test(t.className))
            }

            function m(t, e) {
                return t.classList ? t.classList.add(e) : y(t, e) || (t.className = (t.className + " " + e).trim()), t
            }

            function A(t, e) {
                return t.classList ? t.classList.remove(e) : (a(e), t.className = t.className.split(/\s+/).filter(function(t) {
                    return t !== e
                }).join(" ")), t
            }

            function b(t, e, o) {
                var n = y(t, e);
                if ("function" == typeof o && (o = o(t, e)), "boolean" != typeof o && (o = !n), o !== n) return o ? m(t, e) : A(t, e), t
            }

            function j(t, e) {
                Object.getOwnPropertyNames(e).forEach(function(o) {
                    var n = e[o];
                    null === n || "undefined" == typeof n || n === !1 ? t.removeAttribute(o) : t.setAttribute(o, n === !0 ? "" : n)
                })
            }

            function w(t) {
                var e, o, n, i, r;
                if (e = {}, o = ",autoplay,controls,loop,muted,default,", t && t.attributes && t.attributes.length > 0) {
                    n = t.attributes;
                    for (var s = n.length - 1; s >= 0; s--) i = n[s].name, r = n[s].value, "boolean" != typeof t[i] && o.indexOf("," + i + ",") === -1 || (r = null !== r), e[i] = r
                }
                return e
            }

            function k() {
                F["default"].body.focus(), F["default"].onselectstart = function() {
                    return !1
                }
            }

            function _() {
                F["default"].onselectstart = function() {
                    return !0
                }
            }

            function x(t) {
                var e = void 0;
                if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
                    left: 0,
                    top: 0
                };
                var o = F["default"].documentElement,
                    n = F["default"].body,
                    i = o.clientLeft || n.clientLeft || 0,
                    r = R["default"].pageXOffset || n.scrollLeft,
                    s = e.left + r - i,
                    a = o.clientTop || n.clientTop || 0,
                    l = R["default"].pageYOffset || n.scrollTop,
                    u = e.top + l - a;
                return {
                    left: Math.round(s),
                    top: Math.round(u)
                }
            }

            function T(t, e) {
                var o = {},
                    n = x(t),
                    i = t.offsetWidth,
                    r = t.offsetHeight,
                    s = n.top,
                    a = n.left,
                    l = e.pageY,
                    u = e.pageX;
                return e.changedTouches && (u = e.changedTouches[0].pageX, l = e.changedTouches[0].pageY), o.y = Math.max(0, Math.min(1, (s - l + r) / r)), o.x = Math.max(0, Math.min(1, (u - a) / i)), o
            }

            function E(t) {
                return !!t && "object" == typeof t && 1 === t.nodeType
            }

            function C(t) {
                return !!t && "object" == typeof t && 3 === t.nodeType
            }

            function S(t) {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                return t
            }

            function O(t) {
                return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map(function(t) {
                    return "function" == typeof t && (t = t()), E(t) || C(t) ? t : "string" == typeof t && /\S/.test(t) ? F["default"].createTextNode(t) : void 0
                }).filter(function(t) {
                    return t
                })
            }

            function B(t, e) {
                return O(e).forEach(function(e) {
                    return t.appendChild(e)
                }), t
            }

            function P(t, e) {
                return B(S(t), e)
            }
            o.__esModule = !0, o.getEl = c, o.createEl = p, o.textContent = f, o.insertElFirst = h, o.getElData = d, o.hasElData = v, o.removeElData = g, o.hasElClass = y, o.addElClass = m, o.removeElClass = A, o.toggleElClass = b, o.setElAttributes = j, o.getElAttributes = w, o.blockTextSelection = k, o.unblockTextSelection = _, o.findElPosition = x, o.getPointerPosition = T, o.isEl = E, o.isTextNode = C, o.emptyEl = S, o.normalizeContent = O, o.appendContent = B, o.insertContent = P;
            var M = r(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]),
                I = t("global/document"),
                F = i(I),
                D = t("global/window"),
                R = i(D),
                N = t("./guid.js"),
                L = n(N),
                z = t("./log.js"),
                Q = i(z),
                H = t("tsml"),
                Y = i(H),
                V = {},
                U = "vdata" + (new Date).getTime(),
                G = u("querySelector");
            o.$ = G;
            var W = u("querySelectorAll");
            o.$$ = W
        }, {
            "./guid.js": 136,
            "./log.js": 137,
            "global/document": 1,
            "global/window": 2,
            tsml: 55
        }],
        133: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t, e, o) {
                if (Array.isArray(e)) return p(r, t, e, o);
                var n = h.getElData(t);
                n.handlers || (n.handlers = {}), n.handlers[e] || (n.handlers[e] = []), o.guid || (o.guid = v.newGUID()), n.handlers[e].push(o), n.dispatcher || (n.disabled = !1, n.dispatcher = function(e, o) {
                    if (!n.disabled) {
                        e = u(e);
                        var i = n.handlers[e.type];
                        if (i)
                            for (var r = i.slice(0), s = 0, a = r.length; s < a && !e.isImmediatePropagationStopped(); s++) r[s].call(t, e, o)
                    }
                }), 1 === n.handlers[e].length && (t.addEventListener ? t.addEventListener(e, n.dispatcher, !1) : t.attachEvent && t.attachEvent("on" + e, n.dispatcher))
            }

            function s(t, e, o) {
                if (h.hasElData(t)) {
                    var n = h.getElData(t);
                    if (n.handlers) {
                        if (Array.isArray(e)) return p(s, t, e, o);
                        var i = function(e) {
                            n.handlers[e] = [], c(t, e)
                        };
                        if (e) {
                            var r = n.handlers[e];
                            if (r) {
                                if (!o) return void i(e);
                                if (o.guid)
                                    for (var a = 0; a < r.length; a++) r[a].guid === o.guid && r.splice(a--, 1);
                                c(t, e)
                            }
                        } else
                            for (var l in n.handlers) i(l)
                    }
                }
            }

            function a(t, e, o) {
                var n = h.hasElData(t) ? h.getElData(t) : {},
                    i = t.parentNode || t.ownerDocument;
                if ("string" == typeof e && (e = {
                        type: e,
                        target: t
                    }), e = u(e), n.dispatcher && n.dispatcher.call(t, e, o), i && !e.isPropagationStopped() && e.bubbles === !0) a.call(null, i, e, o);
                else if (!i && !e.defaultPrevented) {
                    var r = h.getElData(e.target);
                    e.target[e.type] && (r.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), r.disabled = !1)
                }
                return !e.defaultPrevented
            }

            function l(t, e, o) {
                if (Array.isArray(e)) return p(l, t, e, o);
                var n = function i() {
                    s(t, e, i), o.apply(this, arguments)
                };
                n.guid = o.guid = o.guid || v.newGUID(), r(t, e, n)
            }

            function u(t) {
                function e() {
                    return !0
                }

                function o() {
                    return !1
                }
                if (!t || !t.isPropagationStopped) {
                    var n = t || y["default"].event;
                    t = {};
                    for (var i in n) "layerX" !== i && "layerY" !== i && "keyLocation" !== i && "webkitMovementX" !== i && "webkitMovementY" !== i && ("returnValue" === i && n.preventDefault || (t[i] = n[i]));
                    if (t.target || (t.target = t.srcElement || A["default"]), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function() {
                            n.preventDefault && n.preventDefault(), t.returnValue = !1, n.returnValue = !1, t.defaultPrevented = !0
                        }, t.defaultPrevented = !1, t.stopPropagation = function() {
                            n.stopPropagation && n.stopPropagation(), t.cancelBubble = !0, n.cancelBubble = !0, t.isPropagationStopped = e
                        }, t.isPropagationStopped = o, t.stopImmediatePropagation = function() {
                            n.stopImmediatePropagation && n.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
                        }, t.isImmediatePropagationStopped = o, null != t.clientX) {
                        var r = A["default"].documentElement,
                            s = A["default"].body;
                        t.pageX = t.clientX + (r && r.scrollLeft || s && s.scrollLeft || 0) - (r && r.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (r && r.scrollTop || s && s.scrollTop || 0) - (r && r.clientTop || s && s.clientTop || 0)
                    }
                    t.which = t.charCode || t.keyCode, null != t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
                }
                return t
            }

            function c(t, e) {
                var o = h.getElData(t);
                0 === o.handlers[e].length && (delete o.handlers[e], t.removeEventListener ? t.removeEventListener(e, o.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, o.dispatcher)), Object.getOwnPropertyNames(o.handlers).length <= 0 && (delete o.handlers, delete o.dispatcher, delete o.disabled), 0 === Object.getOwnPropertyNames(o).length && h.removeElData(t)
            }

            function p(t, e, o, n) {
                o.forEach(function(o) {
                    t(e, o, n)
                })
            }
            o.__esModule = !0, o.on = r, o.off = s, o.trigger = a, o.one = l, o.fixEvent = u;
            var f = t("./dom.js"),
                h = i(f),
                d = t("./guid.js"),
                v = i(d),
                g = t("global/window"),
                y = n(g),
                m = t("global/document"),
                A = n(m)
        }, {
            "./dom.js": 132,
            "./guid.js": 136,
            "global/document": 1,
            "global/window": 2
        }],
        134: [function(t, e, o) {
            "use strict";
            o.__esModule = !0;
            var n = t("./guid.js"),
                i = function(t, e, o) {
                    e.guid || (e.guid = n.newGUID());
                    var i = function() {
                        return e.apply(t, arguments)
                    };
                    return i.guid = o ? o + "_" + e.guid : e.guid, i
                };
            o.bind = i
        }, {
            "./guid.js": 136
        }],
        135: [function(t, e, o) {
            "use strict";

            function n(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? t : arguments[1];
                return function() {
                    t = t < 0 ? 0 : t;
                    var o = Math.floor(t % 60),
                        n = Math.floor(t / 60 % 60),
                        i = Math.floor(t / 3600),
                        r = Math.floor(e / 60 % 60),
                        s = Math.floor(e / 3600);
                    return (isNaN(t) || t === 1 / 0) && (i = n = o = "-"), i = i > 0 || s > 0 ? i + ":" : "", n = ((i || r >= 10) && n < 10 ? "0" + n : n) + ":", o = o < 10 ? "0" + o : o, i + n + o
                }()
            }
            o.__esModule = !0, o["default"] = n, e.exports = o["default"]
        }, {}],
        136: [function(t, e, o) {
            "use strict";

            function n() {
                return i++
            }
            o.__esModule = !0, o.newGUID = n;
            var i = 1
        }, {}],
        137: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                var o = Array.prototype.slice.call(e),
                    n = function() {},
                    i = s["default"].console || {
                        log: n,
                        warn: n,
                        error: n
                    };
                t ? o.unshift(t.toUpperCase() + ":") : t = "log", a.history.push(o), o.unshift("VIDEOJS:"), i[t].apply ? i[t].apply(i, o) : i[t](o.join(" "))
            }
            o.__esModule = !0;
            var r = t("global/window"),
                s = n(r),
                a = function() {
                    i(null, arguments)
                };
            a.history = [], a.error = function() {
                i("error", arguments)
            }, a.warn = function() {
                i("warn", arguments)
            }, o["default"] = a, e.exports = o["default"]
        }, {
            "global/window": 2
        }],
        138: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t) {
                return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
            }

            function r() {
                var t = Array.prototype.slice.call(arguments);
                return t.unshift({}), t.push(l), a["default"].apply(null, t), t[0]
            }
            o.__esModule = !0, o["default"] = r;
            var s = t("lodash-compat/object/merge"),
                a = n(s),
                l = function(t, e) {
                    return i(e) ? i(t) ? void 0 : r(e) : e
                };
            e.exports = o["default"]
        }, {
            "lodash-compat/object/merge": 40
        }],
        139: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            var i = t("global/document"),
                r = n(i),
                s = function(t) {
                    var e = r["default"].createElement("style");
                    return e.className = t, e
                };
            o.createStyleElement = s;
            var a = function(t, e) {
                t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
            };
            o.setTextContent = a
        }, {
            "global/document": 1
        }],
        140: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                return Array.isArray(t) ? r(t) : void 0 === t || void 0 === e ? r() : r([
                    [t, e]
                ])
            }

            function r(t) {
                return void 0 === t || 0 === t.length ? {
                    length: 0,
                    start: function() {
                        throw new Error("This TimeRanges object is empty")
                    },
                    end: function() {
                        throw new Error("This TimeRanges object is empty")
                    }
                } : {
                    length: t.length,
                    start: s.bind(null, "start", 0, t),
                    end: s.bind(null, "end", 1, t)
                }
            }

            function s(t, e, o, n) {
                return void 0 === n && (u["default"].warn("DEPRECATED: Function '" + t + "' on 'TimeRanges' called without an index argument."), n = 0), a(t, n, o.length - 1), o[n][e]
            }

            function a(t, e, o) {
                if (e < 0 || e > o) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is greater than or equal to the maximum bound (" + o + ").")
            }
            o.__esModule = !0, o.createTimeRanges = i;
            var l = t("./log.js"),
                u = n(l);
            o.createTimeRange = i
        }, {
            "./log.js": 137
        }],
        141: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            o.__esModule = !0, o["default"] = n, e.exports = o["default"]
        }, {}],
        142: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            var i = t("global/document"),
                r = n(i),
                s = t("global/window"),
                a = n(s),
                l = function(t) {
                    var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                        o = r["default"].createElement("a");
                    o.href = t;
                    var n = "" === o.host && "file:" !== o.protocol,
                        i = void 0;
                    n && (i = r["default"].createElement("div"), i.innerHTML = '<a href="' + t + '"></a>', o = i.firstChild, i.setAttribute("style", "display:none; position:absolute;"), r["default"].body.appendChild(i));
                    for (var s = {}, a = 0; a < e.length; a++) s[e[a]] = o[e[a]];
                    return "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")), "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")), n && r["default"].body.removeChild(i), s
                };
            o.parseUrl = l;
            var u = function(t) {
                if (!t.match(/^https?:\/\//)) {
                    var e = r["default"].createElement("div");
                    e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
                }
                return t
            };
            o.getAbsoluteURL = u;
            var c = function(t) {
                if ("string" == typeof t) {
                    var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,
                        o = e.exec(t);
                    if (o) return o.pop().toLowerCase()
                }
                return ""
            };
            o.getFileExtension = c;
            var p = function(t) {
                var e = a["default"].location,
                    o = l(t),
                    n = ":" === o.protocol ? e.protocol : o.protocol,
                    i = n + o.host !== e.protocol + e.host;
                return i
            };
            o.isCrossOrigin = p
        }, {
            "global/document": 1,
            "global/window": 2
        }],
        143: [function(e, o, n) {
            "use strict";

            function i(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            n.__esModule = !0;
            var s = e("global/document"),
                a = r(s),
                l = e("./setup"),
                u = i(l),
                c = e("./utils/stylesheet.js"),
                p = i(c),
                f = e("./component"),
                h = r(f),
                d = e("./event-target"),
                v = r(d),
                g = e("./utils/events.js"),
                y = i(g),
                m = e("./player"),
                A = r(m),
                b = e("./plugins.js"),
                j = r(b),
                w = e("../../src/js/utils/merge-options.js"),
                k = r(w),
                _ = e("./utils/fn.js"),
                x = i(_),
                T = e("./tracks/text-track.js"),
                E = r(T),
                C = e("object.assign"),
                S = (r(C), e("./utils/time-ranges.js")),
                O = e("./utils/format-time.js"),
                B = r(O),
                P = e("./utils/log.js"),
                M = r(P),
                I = e("./utils/dom.js"),
                F = i(I),
                D = e("./utils/browser.js"),
                R = i(D),
                N = e("./utils/url.js"),
                L = i(N),
                z = e("./extend.js"),
                Q = r(z),
                H = e("lodash-compat/object/merge"),
                Y = r(H),
                V = e("./utils/create-deprecation-proxy.js"),
                U = r(V),
                G = e("xhr"),
                W = r(G),
                J = e("./tech/tech.js"),
                X = r(J),
                Z = e("./tech/html5.js"),
                q = (r(Z), e("./tech/flash.js"));
            r(q);
            "undefined" == typeof HTMLVideoElement && (a["default"].createElement("video"), a["default"].createElement("audio"), a["default"].createElement("track"));
            var K = function et(t, e, o) {
                    var n = void 0;
                    if ("string" == typeof t) {
                        if (0 === t.indexOf("#") && (t = t.slice(1)), et.getPlayers()[t]) return e && M["default"].warn('Player "' + t + '" is already initialised. Options will not be applied.'), o && et.getPlayers()[t].ready(o), et.getPlayers()[t];
                        n = F.getEl(t)
                    } else n = t;
                    if (!n || !n.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                    return n.player || A["default"].players[n.playerId] || new A["default"](n, e, o)
                },
                $ = F.$(".vjs-styles-defaults");
            if (!$) {
                $ = p.createStyleElement("vjs-styles-defaults");
                var tt = F.$("head");
                tt.insertBefore($, tt.firstChild), p.setTextContent($, "\n    .video-js {\n      width: 300px;\n      height: 150px;\n    }\n\n    .vjs-fluid {\n      padding-top: 56.25%\n    }\n  ")
            }
            u.autoSetupTimeout(1, K), K.VERSION = "5.8.8", K.options = A["default"].prototype.options_, K.getPlayers = function() {
                return A["default"].players
            }, K.players = U["default"](A["default"].players, {
                get: "Access to videojs.players is deprecated; use videojs.getPlayers instead",
                set: "Modification of videojs.players is deprecated"
            }), K.getComponent = h["default"].getComponent, K.registerComponent = function(t, e) {
                X["default"].isTech(e) && M["default"].warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), h["default"].registerComponent.call(h["default"], t, e)
            }, K.getTech = X["default"].getTech, K.registerTech = X["default"].registerTech, K.browser = R, K.TOUCH_ENABLED = R.TOUCH_ENABLED, K.extend = Q["default"], K.mergeOptions = k["default"], K.bind = x.bind, K.plugin = j["default"], K.addLanguage = function(t, e) {
                var o;
                return t = ("" + t).toLowerCase(), Y["default"](K.options.languages, (o = {}, o[t] = e, o))[t]
            }, K.log = M["default"], K.createTimeRange = K.createTimeRanges = S.createTimeRanges, K.formatTime = B["default"], K.parseUrl = L.parseUrl, K.isCrossOrigin = L.isCrossOrigin, K.EventTarget = v["default"], K.on = y.on, K.one = y.one, K.off = y.off, K.trigger = y.trigger, K.xhr = W["default"], K.TextTrack = E["default"], K.isEl = F.isEl, K.isTextNode = F.isTextNode, K.createEl = F.createEl, K.hasClass = F.hasElClass, K.addClass = F.addElClass, K.removeClass = F.removeElClass, K.toggleClass = F.toggleElClass, K.setAttributes = F.setElAttributes, K.getAttributes = F.getElAttributes, K.emptyEl = F.emptyEl, K.appendContent = F.appendContent, K.insertContent = F.insertContent, "function" == typeof t && t.amd ? t("videojs", [], function() {
                return K
            }) : "object" == typeof n && "object" == typeof o && (o.exports = K), n["default"] = K, o.exports = n["default"]
        }, {
            "../../src/js/utils/merge-options.js": 138,
            "./component": 67,
            "./event-target": 99,
            "./extend.js": 100,
            "./player": 108,
            "./plugins.js": 109,
            "./setup": 113,
            "./tech/flash.js": 116,
            "./tech/html5.js": 117,
            "./tech/tech.js": 119,
            "./tracks/text-track.js": 128,
            "./utils/browser.js": 129,
            "./utils/create-deprecation-proxy.js": 131,
            "./utils/dom.js": 132,
            "./utils/events.js": 133,
            "./utils/fn.js": 134,
            "./utils/format-time.js": 135,
            "./utils/log.js": 137,
            "./utils/stylesheet.js": 139,
            "./utils/time-ranges.js": 140,
            "./utils/url.js": 142,
            "global/document": 1,
            "lodash-compat/object/merge": 40,
            "object.assign": 45,
            xhr: 56
        }]
    }, {}, [143])(143)
}),
function(t) {
    var e = t.vttjs = {},
        o = e.VTTCue,
        n = e.VTTRegion,
        i = t.VTTCue,
        r = t.VTTRegion;
    e.shim = function() {
        e.VTTCue = o, e.VTTRegion = n
    }, e.restore = function() {
        e.VTTCue = i, e.VTTRegion = r
    }
}(this),
function(t, e) {
    function o(t) {
        if ("string" != typeof t) return !1;
        var e = a[t.toLowerCase()];
        return !!e && t.toLowerCase()
    }

    function n(t) {
        if ("string" != typeof t) return !1;
        var e = l[t.toLowerCase()];
        return !!e && t.toLowerCase()
    }

    function i(t) {
        for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) t[n] = o[n]
        }
        return t
    }

    function r(t, e, r) {
        var a = this,
            l = /MSIE\s8\.0/.test(navigator.userAgent),
            u = {};
        l ? a = document.createElement("custom") : u.enumerable = !0, a.hasBeenReset = !1;
        var c = "",
            p = !1,
            f = t,
            h = e,
            d = r,
            v = null,
            g = "",
            y = !0,
            m = "auto",
            A = "start",
            b = 50,
            j = "middle",
            w = 50,
            k = "middle";
        if (Object.defineProperty(a, "id", i({}, u, {
                get: function() {
                    return c
                },
                set: function(t) {
                    c = "" + t
                }
            })), Object.defineProperty(a, "pauseOnExit", i({}, u, {
                get: function() {
                    return p
                },
                set: function(t) {
                    p = !!t
                }
            })), Object.defineProperty(a, "startTime", i({}, u, {
                get: function() {
                    return f
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                    f = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "endTime", i({}, u, {
                get: function() {
                    return h
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                    h = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "text", i({}, u, {
                get: function() {
                    return d
                },
                set: function(t) {
                    d = "" + t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "region", i({}, u, {
                get: function() {
                    return v
                },
                set: function(t) {
                    v = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "vertical", i({}, u, {
                get: function() {
                    return g
                },
                set: function(t) {
                    var e = o(t);
                    if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                    g = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "snapToLines", i({}, u, {
                get: function() {
                    return y
                },
                set: function(t) {
                    y = !!t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "line", i({}, u, {
                get: function() {
                    return m
                },
                set: function(t) {
                    if ("number" != typeof t && t !== s) throw new SyntaxError("An invalid number or illegal string was specified.");
                    m = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "lineAlign", i({}, u, {
                get: function() {
                    return A
                },
                set: function(t) {
                    var e = n(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    A = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "position", i({}, u, {
                get: function() {
                    return b
                },
                set: function(t) {
                    if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                    b = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "positionAlign", i({}, u, {
                get: function() {
                    return j
                },
                set: function(t) {
                    var e = n(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    j = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "size", i({}, u, {
                get: function() {
                    return w
                },
                set: function(t) {
                    if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                    w = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "align", i({}, u, {
                get: function() {
                    return k
                },
                set: function(t) {
                    var e = n(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    k = e, this.hasBeenReset = !0
                }
            })), a.displayState = void 0, l) return a
    }
    var s = "auto",
        a = {
            "": !0,
            lr: !0,
            rl: !0
        },
        l = {
            start: !0,
            middle: !0,
            end: !0,
            left: !0,
            right: !0
        };
    r.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }, t.VTTCue = t.VTTCue || r, e.VTTCue = r
}(this, this.vttjs || {}),
function(t, e) {
    function o(t) {
        if ("string" != typeof t) return !1;
        var e = r[t.toLowerCase()];
        return !!e && t.toLowerCase()
    }

    function n(t) {
        return "number" == typeof t && t >= 0 && t <= 100
    }

    function i() {
        var t = 100,
            e = 3,
            i = 0,
            r = 100,
            s = 0,
            a = 100,
            l = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    if (!n(e)) throw new Error("Width must be between 0 and 100.");
                    t = e
                }
            },
            lines: {
                enumerable: !0,
                get: function() {
                    return e
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                    e = t
                }
            },
            regionAnchorY: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(t) {
                    if (!n(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    r = t
                }
            },
            regionAnchorX: {
                enumerable: !0,
                get: function() {
                    return i
                },
                set: function(t) {
                    if (!n(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    i = t
                }
            },
            viewportAnchorY: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    if (!n(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    a = t
                }
            },
            viewportAnchorX: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(t) {
                    if (!n(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    s = t
                }
            },
            scroll: {
                enumerable: !0,
                get: function() {
                    return l
                },
                set: function(t) {
                    var e = o(t);
                    if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                    l = e
                }
            }
        })
    }
    var r = {
        "": !0,
        up: !0
    };
    t.VTTRegion = t.VTTRegion || i, e.VTTRegion = i
}(this, this.vttjs || {}),
function(t) {
    function e(t, e) {
        this.name = "ParsingError", this.code = t.code, this.message = e || t.message
    }

    function o(t) {
        function e(t, e, o, n) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | o) + (0 | n) / 1e3
        }
        var o = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return o ? o[3] ? e(o[1], o[2], o[3].replace(":", ""), o[4]) : o[1] > 59 ? e(o[1], o[2], 0, o[4]) : e(0, o[1], o[2], o[4]) : null
    }

    function n() {
        this.values = d(null)
    }

    function i(t, e, o, n) {
        var i = n ? t.split(n) : [t];
        for (var r in i)
            if ("string" == typeof i[r]) {
                var s = i[r].split(o);
                if (2 === s.length) {
                    var a = s[0],
                        l = s[1];
                    e(a, l)
                }
            }
    }

    function r(t, r, s) {
        function a() {
            var n = o(t);
            if (null === n) throw new e(e.Errors.BadTimeStamp, "Malformed timestamp: " + c);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ""), n
        }

        function l(t, e) {
            var o = new n;
            i(t, function(t, e) {
                switch (t) {
                    case "region":
                        for (var n = s.length - 1; n >= 0; n--)
                            if (s[n].id === e) {
                                o.set(t, s[n].region);
                                break
                            }
                        break;
                    case "vertical":
                        o.alt(t, e, ["rl", "lr"]);
                        break;
                    case "line":
                        var i = e.split(","),
                            r = i[0];
                        o.integer(t, r), o.percent(t, r) ? o.set("snapToLines", !1) : null, o.alt(t, r, ["auto"]), 2 === i.length && o.alt("lineAlign", i[1], ["start", "middle", "end"]);
                        break;
                    case "position":
                        i = e.split(","), o.percent(t, i[0]), 2 === i.length && o.alt("positionAlign", i[1], ["start", "middle", "end"]);
                        break;
                    case "size":
                        o.percent(t, e);
                        break;
                    case "align":
                        o.alt(t, e, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/), e.region = o.get("region", null), e.vertical = o.get("vertical", ""), e.line = o.get("line", "auto"), e.lineAlign = o.get("lineAlign", "start"), e.snapToLines = o.get("snapToLines", !0), e.size = o.get("size", 100), e.align = o.get("align", "middle"), e.position = o.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, e.align), e.positionAlign = o.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, e.align)
        }

        function u() {
            t = t.replace(/^\s+/, "")
        }
        var c = t;
        if (u(), r.startTime = a(), u(), "-->" !== t.substr(0, 3)) throw new e(e.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + c);
        t = t.substr(3), u(), r.endTime = a(), u(), l(t, r)
    }

    function s(t, e) {
        function n() {
            function t(t) {
                return e = e.substr(t.length), t
            }
            if (!e) return null;
            var o = e.match(/^([^<]*)(<[^>]+>?)?/);
            return t(o[1] ? o[1] : o[2])
        }

        function i(t) {
            return v[t]
        }

        function r(t) {
            for (; d = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(d[0], i);
            return t
        }

        function s(t, e) {
            return !m[e.localName] || m[e.localName] === t.localName
        }

        function a(e, o) {
            var n = g[e];
            if (!n) return null;
            var i = t.document.createElement(n);
            i.localName = n;
            var r = y[e];
            return r && o && (i[r] = o.trim()), i
        }
        for (var l, u = t.document.createElement("div"), c = u, p = []; null !== (l = n());)
            if ("<" !== l[0]) c.appendChild(t.document.createTextNode(r(l)));
            else {
                if ("/" === l[1]) {
                    p.length && p[p.length - 1] === l.substr(2).replace(">", "") && (p.pop(), c = c.parentNode);
                    continue
                }
                var f, h = o(l.substr(1, l.length - 2));
                if (h) {
                    f = t.document.createProcessingInstruction("timestamp", h), c.appendChild(f);
                    continue
                }
                var d = l.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!d) continue;
                if (f = a(d[1], d[3]), !f) continue;
                if (!s(c, f)) continue;
                d[2] && (f.className = d[2].substr(1).replace(".", " ")), p.push(d[1]), c.appendChild(f), c = f
            }
        return u
    }

    function a(t) {
        function e(t, e) {
            for (var o = e.childNodes.length - 1; o >= 0; o--) t.push(e.childNodes[o])
        }

        function o(t) {
            if (!t || !t.length) return null;
            var n = t.pop(),
                i = n.textContent || n.innerText;
            if (i) {
                var r = i.match(/^.*(\n|\r)/);
                return r ? (t.length = 0, r[0]) : i
            }
            return "ruby" === n.tagName ? o(t) : n.childNodes ? (e(t, n), o(t)) : void 0
        }
        var n, i = [],
            r = "";
        if (!t || !t.childNodes) return "ltr";
        for (e(i, t); r = o(i);)
            for (var s = 0; s < r.length; s++) {
                n = r.charCodeAt(s);
                for (var a = 0; a < A.length; a++)
                    if (A[a] === n) return "rtl"
            }
        return "ltr"
    }

    function l(t) {
        if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
        if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
        for (var e = t.track, o = e.textTrackList, n = 0, i = 0; i < o.length && o[i] !== e; i++) "showing" === o[i].mode && n++;
        return ++n * -1
    }

    function u() {}

    function c(t, e, o) {
        var n = /MSIE\s8\.0/.test(navigator.userAgent),
            i = "rgba(255, 255, 255, 1)",
            r = "rgba(0, 0, 0, 0.8)";
        n && (i = "rgb(255, 255, 255)", r = "rgb(0, 0, 0)"), u.call(this), this.cue = e, this.cueDiv = s(t, e.text);
        var l = {
            color: i,
            backgroundColor: r,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        n || (l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = t.document.createElement("div"), l = {
            textAlign: "middle" === e.align ? "center" : e.align,
            font: o.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, n || (l.direction = a(this.cueDiv), l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
        var c = 0;
        switch (e.positionAlign) {
            case "start":
                c = e.position;
                break;
            case "middle":
                c = e.position - e.size / 2;
                break;
            case "end":
                c = e.position - e.size
        }
        "" === e.vertical ? this.applyStyles({
            left: this.formatStyle(c, "%"),
            width: this.formatStyle(e.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(c, "%"),
            height: this.formatStyle(e.size, "%")
        }), this.move = function(t) {
            this.applyStyles({
                top: this.formatStyle(t.top, "px"),
                bottom: this.formatStyle(t.bottom, "px"),
                left: this.formatStyle(t.left, "px"),
                right: this.formatStyle(t.right, "px"),
                height: this.formatStyle(t.height, "px"),
                width: this.formatStyle(t.width, "px")
            })
        }
    }

    function p(t) {
        var e, o, n, i, r = /MSIE\s8\.0/.test(navigator.userAgent);
        if (t.div) {
            o = t.div.offsetHeight, n = t.div.offsetWidth, i = t.div.offsetTop;
            var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
            t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
        }
        this.left = t.left, this.right = t.right, this.top = t.top || i, this.height = t.height || o, this.bottom = t.bottom || i + (t.height || o), this.width = t.width || n, this.lineHeight = void 0 !== e ? e : t.lineHeight, r && !this.lineHeight && (this.lineHeight = 13)
    }

    function f(t, e, o, n) {
        function i(t, e) {
            for (var i, r = new p(t), s = 1, a = 0; a < e.length; a++) {
                for (; t.overlapsOppositeAxis(o, e[a]) || t.within(o) && t.overlapsAny(n);) t.move(e[a]);
                if (t.within(o)) return t;
                var l = t.intersectPercentage(o);
                s > l && (i = new p(t), s = l), t = new p(r)
            }
            return i || r
        }
        var r = new p(e),
            s = e.cue,
            a = l(s),
            u = [];
        if (s.snapToLines) {
            var c;
            switch (s.vertical) {
                case "":
                    u = ["+y", "-y"], c = "height";
                    break;
                case "rl":
                    u = ["+x", "-x"], c = "width";
                    break;
                case "lr":
                    u = ["-x", "+x"], c = "width"
            }
            var f = r.lineHeight,
                h = f * Math.round(a),
                d = o[c] + f,
                v = u[0];
            Math.abs(h) > d && (h = h < 0 ? -1 : 1, h *= Math.ceil(d / f) * f), a < 0 && (h += "" === s.vertical ? o.height : o.width, u = u.reverse()), r.move(v, h)
        } else {
            var g = r.lineHeight / o.height * 100;
            switch (s.lineAlign) {
                case "middle":
                    a -= g / 2;
                    break;
                case "end":
                    a -= g
            }
            switch (s.vertical) {
                case "":
                    e.applyStyles({
                        top: e.formatStyle(a, "%")
                    });
                    break;
                case "rl":
                    e.applyStyles({
                        left: e.formatStyle(a, "%")
                    });
                    break;
                case "lr":
                    e.applyStyles({
                        right: e.formatStyle(a, "%")
                    })
            }
            u = ["+y", "-x", "+x", "-y"], r = new p(e)
        }
        var y = i(r, u);
        e.move(y.toCSSCompatValues(o))
    }

    function h() {}
    var d = Object.create || function() {
        function t() {}
        return function(e) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return t.prototype = e, new t
        }
    }();
    e.prototype = d(Error.prototype), e.prototype.constructor = e, e.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    }, n.prototype = {
        set: function(t, e) {
            this.get(t) || "" === e || (this.values[t] = e)
        },
        get: function(t, e, o) {
            return o ? this.has(t) ? this.values[t] : e[o] : this.has(t) ? this.values[t] : e
        },
        has: function(t) {
            return t in this.values
        },
        alt: function(t, e, o) {
            for (var n = 0; n < o.length; ++n)
                if (e === o[n]) {
                    this.set(t, e);
                    break
                }
        },
        integer: function(t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
        },
        percent: function(t, e) {
            var o;
            return !!((o = e.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (e = parseFloat(e), e >= 0 && e <= 100)) && (this.set(t, e), !0)
        }
    };
    var v = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&lrm;": "‎",
            "&rlm;": "‏",
            "&nbsp;": " "
        },
        g = {
            c: "span",
            i: "i",
            b: "b",
            u: "u",
            ruby: "ruby",
            rt: "rt",
            v: "span",
            lang: "span"
        },
        y = {
            v: "title",
            lang: "lang"
        },
        m = {
            rt: "ruby"
        },
        A = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
    u.prototype.applyStyles = function(t, e) {
        e = e || this.div;
        for (var o in t) t.hasOwnProperty(o) && (e.style[o] = t[o])
    }, u.prototype.formatStyle = function(t, e) {
        return 0 === t ? 0 : t + e
    }, c.prototype = d(u.prototype), c.prototype.constructor = c, p.prototype.move = function(t, e) {
        switch (e = void 0 !== e ? e : this.lineHeight, t) {
            case "+x":
                this.left += e, this.right += e;
                break;
            case "-x":
                this.left -= e, this.right -= e;
                break;
            case "+y":
                this.top += e, this.bottom += e;
                break;
            case "-y":
                this.top -= e, this.bottom -= e
        }
    }, p.prototype.overlaps = function(t) {
        return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
    }, p.prototype.overlapsAny = function(t) {
        for (var e = 0; e < t.length; e++)
            if (this.overlaps(t[e])) return !0;
        return !1
    }, p.prototype.within = function(t) {
        return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
    }, p.prototype.overlapsOppositeAxis = function(t, e) {
        switch (e) {
            case "+x":
                return this.left < t.left;
            case "-x":
                return this.right > t.right;
            case "+y":
                return this.top < t.top;
            case "-y":
                return this.bottom > t.bottom
        }
    }, p.prototype.intersectPercentage = function(t) {
        var e = Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)),
            o = Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)),
            n = e * o;
        return n / (this.height * this.width)
    }, p.prototype.toCSSCompatValues = function(t) {
        return {
            top: this.top - t.top,
            bottom: t.bottom - this.bottom,
            left: this.left - t.left,
            right: t.right - this.right,
            height: this.height,
            width: this.width
        }
    }, p.getSimpleBoxPosition = function(t) {
        var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
            o = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
            n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
        t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t;
        var i = {
            left: t.left,
            right: t.right,
            top: t.top || n,
            height: t.height || e,
            bottom: t.bottom || n + (t.height || e),
            width: t.width || o
        };
        return i
    }, h.StringDecoder = function() {
        return {
            decode: function(t) {
                if (!t) return "";
                if ("string" != typeof t) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }
        }
    }, h.convertCueToDOMTree = function(t, e) {
        return t && e ? s(t, e) : null
    };
    var b = .05,
        j = "sans-serif",
        w = "1.5%";
    h.processCues = function(t, e, o) {
        function n(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e].hasBeenReset || !t[e].displayState) return !0;
            return !1
        }
        if (!t || !e || !o) return null;
        for (; o.firstChild;) o.removeChild(o.firstChild);
        var i = t.document.createElement("div");
        if (i.style.position = "absolute", i.style.left = "0", i.style.right = "0", i.style.top = "0", i.style.bottom = "0", i.style.margin = w, o.appendChild(i), n(e)) {
            var r = [],
                s = p.getSimpleBoxPosition(i),
                a = Math.round(s.height * b * 100) / 100,
                l = {
                    font: a + "px " + j
                };
            ! function() {
                for (var o, n, a = 0; a < e.length; a++) n = e[a], o = new c(t, n, l), i.appendChild(o.div), f(t, o, s, r), n.displayState = o.div, r.push(p.getSimpleBoxPosition(o))
            }()
        } else
            for (var u = 0; u < e.length; u++) i.appendChild(e[u].displayState)
    }, h.Parser = function(t, e, o) {
        o || (o = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = o || new TextDecoder("utf8"), this.regionList = []
    }, h.Parser.prototype = {
        reportOrThrowError: function(t) {
            if (!(t instanceof e)) throw t;
            this.onparsingerror && this.onparsingerror(t)
        },
        parse: function(t) {
            function o() {
                for (var t = l.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                var o = t.substr(0, e);
                return "\r" === t[e] && ++e, "\n" === t[e] && ++e, l.buffer = t.substr(e), o
            }

            function s(t) {
                var e = new n;
                if (i(t, function(t, o) {
                        switch (t) {
                            case "id":
                                e.set(t, o);
                                break;
                            case "width":
                                e.percent(t, o);
                                break;
                            case "lines":
                                e.integer(t, o);
                                break;
                            case "regionanchor":
                            case "viewportanchor":
                                var i = o.split(",");
                                if (2 !== i.length) break;
                                var r = new n;
                                if (r.percent("x", i[0]), r.percent("y", i[1]), !r.has("x") || !r.has("y")) break;
                                e.set(t + "X", r.get("x")), e.set(t + "Y", r.get("y"));
                                break;
                            case "scroll":
                                e.alt(t, o, ["up"])
                        }
                    }, /=/, /\s/), e.has("id")) {
                    var o = new(l.vttjs.VTTRegion || l.window.VTTRegion);
                    o.width = e.get("width", 100), o.lines = e.get("lines", 3), o.regionAnchorX = e.get("regionanchorX", 0), o.regionAnchorY = e.get("regionanchorY", 100), o.viewportAnchorX = e.get("viewportanchorX", 0), o.viewportAnchorY = e.get("viewportanchorY", 100), o.scroll = e.get("scroll", ""), l.onregion && l.onregion(o), l.regionList.push({
                        id: e.get("id"),
                        region: o
                    })
                }
            }

            function a(t) {
                i(t, function(t, e) {
                    switch (t) {
                        case "Region":
                            s(e)
                    }
                }, /:/)
            }
            var l = this;
            t && (l.buffer += l.decoder.decode(t, {
                stream: !0
            }));
            try {
                var u;
                if ("INITIAL" === l.state) {
                    if (!/\r\n|\n/.test(l.buffer)) return this;
                    u = o();
                    var c = u.match(/^WEBVTT([ \t].*)?$/);
                    if (!c || !c[0]) throw new e(e.Errors.BadSignature);
                    l.state = "HEADER"
                }
                for (var p = !1; l.buffer;) {
                    if (!/\r\n|\n/.test(l.buffer)) return this;
                    switch (p ? p = !1 : u = o(), l.state) {
                        case "HEADER":
                            /:/.test(u) ? a(u) : u || (l.state = "ID");
                            continue;
                        case "NOTE":
                            u || (l.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(u)) {
                                l.state = "NOTE";
                                break
                            }
                            if (!u) continue;
                            if (l.cue = new(l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""),
                                l.state = "CUE", u.indexOf("-->") === -1) {
                                l.cue.id = u;
                                continue
                            }
                        case "CUE":
                            try {
                                r(u, l.cue, l.regionList)
                            } catch (f) {
                                l.reportOrThrowError(f), l.cue = null, l.state = "BADCUE";
                                continue
                            }
                            l.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var h = u.indexOf("-->") !== -1;
                            if (!u || h && (p = !0)) {
                                l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
                                continue
                            }
                            l.cue.text && (l.cue.text += "\n"), l.cue.text += u;
                            continue;
                        case "BADCUE":
                            u || (l.state = "ID");
                            continue
                    }
                }
            } catch (f) {
                l.reportOrThrowError(f), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function() {
            var t = this;
            try {
                if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new e(e.Errors.BadSignature)
            } catch (o) {
                t.reportOrThrowError(o)
            }
            return t.onflush && t.onflush(), this
        }
    }, t.WebVTT = h
}(this, this.vttjs || {}),
function(t, e) {
    "function" == typeof define && define.amd ? define([], e.bind(this, t, t.videojs)) : "undefined" != typeof module && module.exports ? module.exports = e(t, t.videojs) : e(t, t.videojs)
}(window, function(t, e) {
    "use strict";
    t.videojs_hotkeys = {
        version: "0.2.17"
    };
    var o = function(o) {
        function n(t) {
            return 32 === t.which || 179 === t.which
        }

        function i(t) {
            return 37 === t.which || 177 === t.which
        }

        function r(t) {
            return 39 === t.which || 176 === t.which
        }

        function s(t) {
            return 38 === t.which
        }

        function a(t) {
            return 40 === t.which
        }

        function l(t) {
            return 77 === t.which
        }

        function u(t) {
            return 70 === t.which
        }
        var c = this,
            p = c.el(),
            f = document,
            h = {
                volumeStep: .1,
                seekStep: 5,
                enableMute: !0,
                enableVolumeScroll: !0,
                enableFullscreen: !0,
                enableNumbers: !0,
                enableJogStyle: !1,
                alwaysCaptureHotkeys: !0,
                enableModifiersForNumbers: !0,
                playPauseKey: n,
                rewindKey: i,
                forwardKey: r,
                volumeUpKey: s,
                volumeDownKey: a,
                muteKey: l,
                fullscreenKey: u,
                customKeys: {}
            },
            d = 1,
            v = 2,
            g = 3,
            y = 4,
            m = 5,
            A = 6,
            b = 7,
            j = e.mergeOptions || e.util.mergeOptions;
        o = j(h, o || {});
        var w = o.volumeStep,
            k = o.seekStep,
            _ = o.enableMute,
            x = o.enableVolumeScroll,
            T = o.enableFullscreen,
            E = o.enableNumbers,
            C = o.enableJogStyle,
            S = o.alwaysCaptureHotkeys,
            O = o.enableModifiersForNumbers;
        p.hasAttribute("tabIndex") || p.setAttribute("tabIndex", "-1"), p.style.outline = "none", S && c.one("play", function() {
            p.focus()
        }), c.on("play", function() {
            var t = p.querySelector(".iframeblocker");
            t && "" === t.style.display && (t.style.display = "block", t.style.bottom = "39px")
        });
        var B = function(t) {
                var e, n = t.which,
                    i = t.preventDefault;
                if (c.controls()) {
                    var r = f.activeElement;
                    if (S || r == p || r == p.querySelector(".vjs-tech") || r == p.querySelector(".vjs-control-bar") || r == p.querySelector(".iframeblocker")) switch (I(t, c)) {
                        case d:
                            i(), S && t.stopPropagation(), c.paused() ? c.play() : c.pause();
                            break;
                        case v:
                            i(), e = c.currentTime() - k, c.currentTime() <= k && (e = 0), c.currentTime(e);
                            break;
                        case g:
                            i(), c.currentTime(c.currentTime() + k);
                            break;
                        case m:
                            i(), C ? (e = c.currentTime() - 1, c.currentTime() <= 1 && (e = 0), c.currentTime(e)) : c.volume(c.volume() - w);
                            break;
                        case y:
                            i(), C ? c.currentTime(c.currentTime() + 1) : c.volume(c.volume() + w);
                            break;
                        case A:
                            _ && c.muted(!c.muted());
                            break;
                        case b:
                            T && (c.isFullscreen() ? c.exitFullscreen() : c.requestFullscreen());
                            break;
                        default:
                            if ((n > 47 && n < 59 || n > 95 && n < 106) && (O || !(t.metaKey || t.ctrlKey || t.altKey)) && E) {
                                var s = 48;
                                n > 95 && (s = 96);
                                var a = n - s;
                                i(), c.currentTime(c.duration() * a * .1)
                            }
                            for (var l in o.customKeys) {
                                var u = o.customKeys[l];
                                u && u.key && u.handler && u.key(t) && (i(), u.handler(c, o, t))
                            }
                    }
                }
            },
            P = function(t) {
                if (c.controls()) {
                    var e = t.relatedTarget || t.toElement || f.activeElement;
                    e != p && e != p.querySelector(".vjs-tech") && e != p.querySelector(".iframeblocker") || T && (c.isFullscreen() ? c.exitFullscreen() : c.requestFullscreen())
                }
            },
            M = function(e) {
                if (c.controls()) {
                    var o = e.relatedTarget || e.toElement || f.activeElement;
                    if ((S || o == p || o == p.querySelector(".vjs-tech") || o == p.querySelector(".iframeblocker") || o == p.querySelector(".vjs-control-bar")) && x) {
                        e = t.event || e;
                        var n = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
                        e.preventDefault(), 1 == n ? c.volume(c.volume() + w) : n == -1 && c.volume(c.volume() - w)
                    }
                }
            },
            I = function(t, e) {
                return o.playPauseKey(t, e) ? d : o.rewindKey(t, e) ? v : o.forwardKey(t, e) ? g : o.volumeUpKey(t, e) ? y : o.volumeDownKey(t, e) ? m : o.muteKey(t, e) ? A : o.fullscreenKey(t, e) ? b : void 0
            };
        return c.on("keydown", B), c.on("dblclick", P), c.on("mousewheel", M), c.on("DOMMouseScroll", M), this
    };
    e.plugin("hotkeys", o)
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["video.js"], function(o) {
        return t.Youtube = e(o)
    }) : "object" == typeof module && module.exports ? module.exports = t.Youtube = e(require("video.js")) : t.Youtube = e(t.videojs)
}(this, function(t) {
    "use strict";

    function e() {
        if (!i.apiLoaded) {
            var t = document.createElement("script");
            t.src = "https://www.youtube.com/iframe_api";
            var e = document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(t, e), i.apiLoaded = !0
        }
    }

    function o() {
        var t = ".vjs-youtube .vjs-iframe-blocker { display: none; }.vjs-youtube.vjs-user-inactive .vjs-iframe-blocker { display: block; }.vjs-youtube .vjs-poster { background-size: cover; }.vjs-youtube-mobile .vjs-big-play-button { display: none; }",
            e = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
        o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t)), e.appendChild(o)
    }
    var n = t.getComponent("Tech"),
        i = t.extend(n, {
            apiLoaded: !1,
            constructor: function(t, e) {
                n.call(this, t, e), this.setPoster(t.poster), this.setSrc(this.options_.source, !0), setTimeout(function() {
                    this.el_.parentNode.className += " vjs-youtube", i.isApiReady ? (this.setSrc(this.options_.source, !0), this.initYTPlayer()) : i.apiReadyQueue.push(this)
                }.bind(this))
            },
            dispose: function() {
                this.el_.parentNode.className = this.el_.parentNode.className.replace(" vjs-youtube", "").replace(" vjs-youtube-mobile", "")
            },
            createEl: function() {
                e(), o();
                var t = document.createElement("div");
                t.setAttribute("id", this.options_.techId), t.setAttribute("style", "width:100%;height:100%;top:0;left:0;position:absolute");
                var n = document.createElement("div");
                if (n.appendChild(t), !r && !this.options_.ytControls) {
                    var i = document.createElement("div");
                    i.setAttribute("class", "vjs-iframe-blocker"), i.setAttribute("style", "position:absolute;top:0;left:0;width:100%;height:100%"), i.onclick = function() {
                        this.pause()
                    }.bind(this), n.appendChild(i)
                }
                return n
            },
            initYTPlayer: function() {
                var t = {
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    loop: this.options_.loop ? 1 : 0
                };
                "undefined" != typeof this.options_.autohide && (t.autohide = this.options_.autohide), "undefined" != typeof this.options_.cc_load_policy && (t.cc_load_policy = this.options_.cc_load_policy), "undefined" != typeof this.options_.ytControls && (t.controls = this.options_.ytControls), "undefined" != typeof this.options_.disablekb && (t.disablekb = this.options_.disablekb), "undefined" != typeof this.options_.end && (t.end = this.options_.end), "undefined" != typeof this.options_.color && (t.color = this.options_.color), t.controls ? "undefined" != typeof this.options_.fs && (t.fs = this.options_.fs) : t.fs = 0, "undefined" != typeof this.options_.end && (t.end = this.options_.end), "undefined" != typeof this.options_.hl ? t.hl = this.options_.hl : "undefined" != typeof this.options_.language && (t.hl = this.options_.language.substr(0, 2)), "undefined" != typeof this.options_.iv_load_policy && (t.iv_load_policy = this.options_.iv_load_policy), "undefined" != typeof this.options_.list ? t.list = this.options_.list : this.url && "undefined" != typeof this.url.listId && (t.list = this.url.listId), "undefined" != typeof this.options_.listType && (t.listType = this.options_.listType), "undefined" != typeof this.options_.modestbranding && (t.modestbranding = this.options_.modestbranding), "undefined" != typeof this.options_.playlist && (t.playlist = this.options_.playlist), "undefined" != typeof this.options_.playsinline && (t.playsinline = this.options_.playsinline), "undefined" != typeof this.options_.rel && (t.rel = this.options_.rel), "undefined" != typeof this.options_.showinfo && (t.showinfo = this.options_.showinfo), "undefined" != typeof this.options_.start && (t.start = this.options_.start), "undefined" != typeof this.options_.theme && (t.theme = this.options_.theme), this.activeVideoId = this.url ? this.url.videoId : null, this.activeList = t.list, this.ytPlayer = new YT.Player(this.options_.techId, {
                    videoId: this.activeVideoId,
                    playerVars: t,
                    events: {
                        onReady: this.onPlayerReady.bind(this),
                        onPlaybackQualityChange: this.onPlayerPlaybackQualityChange.bind(this),
                        onStateChange: this.onPlayerStateChange.bind(this),
                        onError: this.onPlayerError.bind(this)
                    }
                })
            },
            onPlayerReady: function() {
                this.playerReady_ = !0, this.triggerReady(), this.playOnReady && this.play()
            },
            onPlayerPlaybackQualityChange: function() {},
            onPlayerStateChange: function(t) {
                var e = t.data;
                if (e !== this.lastState && !this.errorNumber) {
                    switch (e) {
                        case -1:
                            this.trigger("loadedmetadata"), this.trigger("durationchange");
                            break;
                        case YT.PlayerState.ENDED:
                            this.trigger("ended");
                            break;
                        case YT.PlayerState.PLAYING:
                            this.trigger("timeupdate"), this.trigger("durationchange"), this.trigger("playing"), this.trigger("play"), this.isSeeking && this.onSeeked();
                            break;
                        case YT.PlayerState.PAUSED:
                            this.trigger("canplay"), this.isSeeking ? this.onSeeked() : this.trigger("pause");
                            break;
                        case YT.PlayerState.BUFFERING:
                            this.player_.trigger("timeupdate"), this.player_.trigger("waiting")
                    }
                    this.lastState = e
                }
            },
            onPlayerError: function(t) {
                this.errorNumber = t.data, this.trigger("error"), this.ytPlayer.stopVideo(), this.ytPlayer.destroy(), this.ytPlayer = null
            },
            error: function() {
                switch (this.errorNumber) {
                    case 5:
                        return {
                            code: "Error while trying to play the video"
                        };
                    case 2:
                    case 100:
                    case 150:
                        return {
                            code: "Unable to find the video"
                        };
                    case 101:
                        return {
                            code: "Playback on other Websites has been disabled by the video owner."
                        }
                }
                return {
                    code: "YouTube unknown error (" + this.errorNumber + ")"
                }
            },
            src: function(t) {
                return t && (this.setSrc({
                    src: t
                }), this.options_.autoplay && !r && this.play()), this.source
            },
            poster: function() {
                return this.poster_
            },
            setPoster: function(t) {
                this.poster_ = t
            },
            setSrc: function(t) {
                t && t.src && (delete this.errorNumber, this.source = t, this.url = i.parseUrl(t.src), this.options_.poster || this.url.videoId && (this.poster_ = "https://img.youtube.com/vi/" + this.url.videoId + "/0.jpg", this.checkHighResPoster()), this.options_.autoplay && !r && (this.isReady_ ? this.play() : this.playOnReady = !0))
            },
            play: function() {
                this.url && this.url.videoId && (this.wasPausedBeforeSeek = !1, this.isReady_ ? (this.url.listId && (this.activeList === this.url.listId ? this.ytPlayer.playVideo() : (this.ytPlayer.loadPlaylist(this.url.listId), this.activeList = this.url.listId)), this.activeVideoId === this.url.videoId ? this.ytPlayer.playVideo() : (this.ytPlayer.loadVideoById(this.url.videoId), this.activeVideoId = this.url.videoId)) : (this.trigger("waiting"), this.playOnReady = !0))
            },
            pause: function() {
                this.ytPlayer && this.ytPlayer.pauseVideo()
            },
            paused: function() {
                return !this.ytPlayer || this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING
            },
            currentTime: function() {
                return this.ytPlayer ? this.ytPlayer.getCurrentTime() : 0
            },
            setCurrentTime: function(t) {
                this.lastState === YT.PlayerState.PAUSED && (this.timeBeforeSeek = this.currentTime()), this.isSeeking || (this.wasPausedBeforeSeek = this.paused()), this.ytPlayer.seekTo(t, !0), this.trigger("timeupdate"), this.trigger("seeking"), this.isSeeking = !0, this.lastState === YT.PlayerState.PAUSED && this.timeBeforeSeek !== t && (clearInterval(this.checkSeekedInPauseInterval), this.checkSeekedInPauseInterval = setInterval(function() {
                    this.lastState === YT.PlayerState.PAUSED && this.isSeeking ? this.currentTime() !== this.timeBeforeSeek && (this.trigger("timeupdate"), this.onSeeked()) : clearInterval(this.checkSeekedInPauseInterval)
                }.bind(this), 250))
            },
            onSeeked: function() {
                clearInterval(this.checkSeekedInPauseInterval), this.isSeeking = !1, this.wasPausedBeforeSeek && this.pause(), this.trigger("seeked")
            },
            playbackRate: function() {
                return this.ytPlayer ? this.ytPlayer.getPlaybackRate() : 1
            },
            setPlaybackRate: function(t) {
                this.ytPlayer && (this.ytPlayer.setPlaybackRate(t), this.trigger("ratechange"))
            },
            duration: function() {
                return this.ytPlayer ? this.ytPlayer.getDuration() : 0
            },
            currentSrc: function() {
                return this.source
            },
            ended: function() {
                return !!this.ytPlayer && this.lastState === YT.PlayerState.ENDED
            },
            volume: function() {
                return this.ytPlayer ? this.ytPlayer.getVolume() / 100 : 1
            },
            setVolume: function(t) {
                this.ytPlayer && (this.ytPlayer.setVolume(100 * t), this.setTimeout(function() {
                    this.trigger("volumechange")
                }, 50))
            },
            muted: function() {
                return !!this.ytPlayer && this.ytPlayer.isMuted()
            },
            setMuted: function(t) {
                this.ytPlayer && (this.muted(!0), t ? this.ytPlayer.mute() : this.ytPlayer.unMute(), this.setTimeout(function() {
                    this.trigger("volumechange")
                }, 50))
            },
            buffered: function() {
                if (!this.ytPlayer || !this.ytPlayer.getVideoLoadedFraction) return {
                    length: 0,
                    start: function() {
                        throw new Error("This TimeRanges object is empty")
                    },
                    end: function() {
                        throw new Error("This TimeRanges object is empty")
                    }
                };
                var t = this.ytPlayer.getVideoLoadedFraction() * this.ytPlayer.getDuration();
                return {
                    length: this.ytPlayer.getDuration(),
                    start: function() {
                        return 0
                    },
                    end: function() {
                        return t
                    }
                }
            },
            load: function() {},
            reset: function() {},
            supportsFullScreen: function() {
                return !0
            },
            checkHighResPoster: function() {
                var t = "https://img.youtube.com/vi/" + this.url.videoId + "/maxresdefault.jpg";
                try {
                    var e = new Image;
                    e.onload = function() {
                        if ("naturalHeight" in e) {
                            if (e.naturalHeight <= 90 || e.naturalWidth <= 120) return
                        } else if (e.height <= 90 || e.width <= 120) return;
                        this.poster_ = t, this.trigger("posterchange")
                    }.bind(this), e.onerror = function() {}, e.src = t
                } catch (o) {}
            }
        });
    i.isSupported = function() {
        return !0
    }, i.canPlaySource = function(t) {
        return "video/youtube" === t.type
    };
    var r = /(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent);
    i.parseUrl = function(t) {
        var e = {
                videoId: null
            },
            o = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
            n = t.match(o);
        n && 11 === n[2].length && (e.videoId = n[2]);
        var i = /[?&]list=([^#\&\?]+)/;
        return n = t.match(i), n && n[1] && (e.listId = n[1]), e
    }, i.apiReadyQueue = [], window.onYouTubeIframeAPIReady = function() {
        i.isApiReady = !0;
        for (var t = 0; t < i.apiReadyQueue.length; ++t) i.apiReadyQueue[t].initYTPlayer()
    }, "undefined" != typeof t.registerTech ? t.registerTech("Youtube", i) : t.registerComponent("Youtube", i)
});
var _createClass = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
        }
    }(),
    _get = function(t, e, o) {
        for (var n = !0; n;) {
            var i = t,
                r = e,
                s = o;
            n = !1, null === i && (i = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(i, r);
            if (void 0 !== a) {
                if ("value" in a) return a.value;
                var l = a.get;
                if (void 0 === l) return;
                return l.call(s)
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            t = u, e = r, o = s, n = !0, a = u = void 0
        }
    },
    VjsLBButtonClose = videojs.getComponent("Button"),
    LightboxCloseButton = function(t) {
        function e(t, o) {
            _classCallCheck(this, e), _get(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, o), this.on("click", this.closeClick), this.on("tap", this.closeClick)
        }
        return _inherits(e, t), _createClass(e, [{
            key: "buildCSSClass",
            value: function() {
                return "vjs-lightbox-close-button vjs-button vjs-control"
            }
        }, {
            key: "closeClick",
            value: function() {
                afterglow.closeLightbox()
            }
        }]), e
    }(VjsLBButtonClose);
! function() {
    videojs.registerComponent("LightboxCloseButton", LightboxCloseButton)
}();
var _createClass = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
        }
    }(),
    _get = function(t, e, o) {
        for (var n = !0; n;) {
            var i = t,
                r = e,
                s = o;
            n = !1, null === i && (i = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(i, r);
            if (void 0 !== a) {
                if ("value" in a) return a.value;
                var l = a.get;
                if (void 0 === l) return;
                return l.call(s)
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            t = u, e = r, o = s, n = !0, a = u = void 0
        }
    },
    VjsButtonResBBase = videojs.getComponent("Button"),
    ResolutionSwitchingButton = function(t) {
        function e(t, o) {
            _classCallCheck(this, e), _get(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, o), this.init()
        }
        return _inherits(e, t), _createClass(e, [{
            key: "buildCSSClass",
            value: function() {
                return "vjs-ag-res-button " + _get(Object.getPrototypeOf(e.prototype), "buildCSSClass", this).call(this)
            }
        }, {
            key: "init",
            value: function() {
                this.prepareSources(), this.setResolutionsNeededFromPlayer(), this.resolutionsNeeded && (this.switchSource(this.sources[0]), this.setCurrentResFromPlayer(), this.on("click", this.switchResolution), this.on("tap", this.switchResolution)), this.updateButton();
                var t = this;
                this.player_.on("ready", function() {
                    t.updateButton
                }), this.player_.on("play", function() {
                    t.updateButton
                })
            }
        }, {
            key: "prepareSources",
            value: function() {
                this.sources = this.getAbsoluteSources(), this.sourcesByType = videojs.reduce(this.sources, function(t, e, o) {
                    return (t[e.type] = t[e.type] || []).push(e), t
                }, {}, this.player_), this.typeAndTech = this.selectTypeAndTech(this.sources)
            }
        }, {
            key: "setCurrentResFromPlayer",
            value: function() {
                for (var t = this.player_.src(), e = this.sources, o = e.length - 1; o >= 0; o--) e[o].src == t && ("hd" !== e[o]["data-quality"] ? this.currentRes = "sd" : this.currentRes = "hd")
            }
        }, {
            key: "setResolutionsNeededFromPlayer",
            value: function() {
                if (this.resolutionsNeeded = !1, "object" == typeof this.typeAndTech) {
                    var t = this.typeAndTech.type;
                    if (void 0 !== this.sourcesByType[t] && this.sourcesByType[t].length > 1)
                        for (var e = this.sourcesByType[t].length - 1; e >= 0; e--)
                            if (void 0 !== this.sourcesByType[t][e]["data-quality"] || this.sourcesByType[t][e]["data-quality"] != this.currentRes) return void(this.resolutionsNeeded = !0)
                }
            }
        }, {
            key: "removeSources",
            value: function() {
                var t = this.player_.el_.getElementsByTagName("video")[0];
                if ("Html5" === this.player_.techName_ && t)
                    for (var e = t.getElementsByTagName("source"), o = 0; o < e.length; o++) t.removeChild(e[o])
            }
        }, {
            key: "getAbsoluteSources",
            value: function() {
                for (var t = this.player_.options_.sources, e = window.location.href.match(/(.*\/)/)[0], o = window.location.protocol, n = window.location.origin, i = t.length - 1; i >= 0; i--) {
                    var r = t[i].src;
                    if (void 0 !== r && "" !== r) {
                        if (r.search(/^\/\//) != -1) r = o + r;
                        else {
                            if (r.search(/:\/\//) != -1) continue;
                            r = r.search(/^\//) != -1 ? n + r : e + r
                        }
                        t[i].src = r
                    }
                }
                return t
            }
        }, {
            key: "getSourceForResolutionChange",
            value: function() {
                for (var t = this.typeAndTech.type, e = this.sourcesByType[t], o = e.length - 1; o >= 0; o--)
                    if ("hd" == this.currentRes) {
                        if (void 0 == e[o]["data-quality"] || "hd" !== e[o]["data-quality"]) return e[o]
                    } else if ("hd" == e[o]["data-quality"]) return e[o];
                return e[0]
            }
        }, {
            key: "switchResolution",
            value: function() {
                var t = this.getSourceForResolutionChange();
                this.switchSource(t)
            }
        }, {
            key: "stopStream",
            value: function() {
                switch (this.player_.techName_) {
                    case "Flash":
                        this.player_.tech_.el_.vjs_stop()
                }
            }
        }, {
            key: "selectSource",
            value: function(t) {
                this.removeSources();
                var e = this.sourcesByType,
                    o = this.selectTypeAndTech(t);
                return !!o && (this.options_.sourceResolutions = e[o.type], this.selectResolution(this.options_.sourceResolutions))
            }
        }, {
            key: "selectTypeAndTech",
            value: function(t) {
                for (var e, o, n = 0, i = this.player_.options_.techOrder; n < i.length; n++)
                    if (e = this.player_.techName_, o = window.videojs.getTech(e), o.isSupported())
                        for (var r = 0, s = t; r < s.length; r++) {
                            var a = s[r];
                            if (o.canPlaySource(a)) return {
                                type: a.type,
                                tech: e
                            }
                        }
            }
        }, {
            key: "selectResolution",
            value: function(t) {
                var e = 0,
                    o = !!window.localStorage,
                    n = e;
                if (o) {
                    var i = parseInt(window.localStorage.getItem("videojs_preferred_res"), 10);
                    isNaN(i) || (n = i)
                }
                var r = t.length - 1,
                    s = n > r ? r : n;
                return t[s]
            }
        }, {
            key: "switchSource",
            value: function(t) {
                if (this.player_.cache_.src === t.src) return this.player_.trigger("resolutionchange"), this.player_;
                var e = this.player_.currentTime(),
                    o = this.player_.paused();
                this.player_.pause(), this.stopStream(), "Html5" === this.player_.techName_ ? this.player_.src(t.src) : this.player_.loadTech(this.player_.techName_, {
                    src: t.src
                });
                var n = this;
                this.player_.ready(function() {
                    this.player_.one("loadeddata", videojs.bind(this.player_, function() {
                        this.player_.currentTime(e)
                    })), this.player_.trigger("resolutionchange"), o || (this.player_.load(), this.player_.play()), localStorage.setItem("videojs_preferred_res", parseInt(t.index, 10)), n.setCurrentResFromPlayer(), n.updateButton()
                })
            }
        }, {
            key: "updateButton",
            value: function() {
                var t = this.prepareButtonElement(this.el_);
                this.resolutionsNeeded ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden"), "hd" == this.currentRes ? t.addClass("vjs-ag-res-hd") : t.removeClass("vjs-ag-res-hd"), this.el_.blur()
            }
        }, {
            key: "prepareButtonElement",
            value: function(t) {
                return "function" != typeof t.addClass && (t.addClass = function(t) {
                    if (this.classList) this.classList.add(t);
                    else if (-1 == this.className.indexOf(t)) {
                        var e = this.className.split(" ");
                        e.push(t), this.className = e.join(" ")
                    }
                    return this
                }), "function" != typeof t.removeClass && (t.removeClass = function(t) {
                    if (this.classList) this.classList.remove(t);
                    else {
                        var e = this.className.split(" ");
                        e.splice(e.indexOf(t), 1), this.className = e.join(" ")
                    }
                    return this
                }), t
            }
        }]), e
    }(VjsButtonResBBase);
videojs.reduce = function(t, e, o, n) {
        if (t && 0 !== t.length) {
            for (var i = 0, r = t.length; i < r; i++) o = e.call(t, o, t[i], i);
            return o
        }
    },
    function() {
        videojs.registerComponent("ResolutionSwitchingButton", ResolutionSwitchingButton)
    }();
var _createClass = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
        }
    }(),
    _get = function(t, e, o) {
        for (var n = !0; n;) {
            var i = t,
                r = e,
                s = o;
            n = !1, null === i && (i = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(i, r);
            if (void 0 !== a) {
                if ("value" in a) return a.value;
                var l = a.get;
                if (void 0 === l) return;
                return l.call(s)
            }
            var u = Object.getPrototypeOf(i);
            if (null === u) return;
            t = u, e = r, o = s, n = !0, a = u = void 0
        }
    },
    VjsComponent = videojs.getComponent("Component"),
    TopControlBar = function(t) {
        function e(t, o) {
            _classCallCheck(this, e), _get(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, o)
        }
        return _inherits(e, t), _createClass(e, [{
            key: "createEl",
            value: function() {
                return _get(Object.getPrototypeOf(e.prototype), "createEl", this).call(this, "div", {
                    className: "vjs-top-control-bar"
                })
            }
        }]), e
    }(VjsComponent);
TopControlBar.prototype.options_ = {
        loadEvent: "play",
        children: ["fullscreenToggle"]
    },
    function() {
        videojs.registerComponent("TopControlBar", TopControlBar)
    }(),
    function t(e, o, n) {
        function i(s, a) {
            if (!o[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (r) return r(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = o[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, function(t) {
                    var o = e[s][1][t];
                    return i(o ? o : t)
                }, c, c.exports, t, e, o, n)
            }
            return o[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]);
        return i
    }({
        1: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                s = t("./components/Player"),
                a = n(s),
                l = t("./components/Lightbox"),
                u = (n(l), t("./components/LightboxTrigger")),
                c = n(u),
                p = t("./lib/DOMElement"),
                f = n(p),
                h = function() {
                    function t() {
                        i(this, t), this.players = [], this.lightboxtriggers = []
                    }
                    return r(t, [{
                        key: "init",
                        value: function() {
                            this.configureVideoJS(), this.initVideoElements(), this.prepareLightboxVideos()
                        }
                    }, {
                        key: "initVideoElements",
                        value: function() {
                            for (var t = document.querySelectorAll("video.afterglow,video.sublime"), e = 0; e < t.length; e++) {
                                var o = new f["default"](t[e]),
                                    n = new a["default"](o);
                                n.init(), this.players.push(n)
                            }
                        }
                    }, {
                        key: "prepareLightboxVideos",
                        value: function() {
                            for (var t = document.querySelectorAll("a.afterglow,a.sublime"), e = 0; e < t.length; e++) {
                                var o = new c["default"](t[e]);
                                this.bindLightboxTriggerEvents(o), this.lightboxtriggers.push(o)
                            }
                        }
                    }, {
                        key: "bindLightboxTriggerEvents",
                        value: function(t) {
                            var e = this;
                            t.on("trigger", function() {
                                e.consolidatePlayers
                            }), t.on("close", function() {
                                e.consolidatePlayers()
                            })
                        }
                    }, {
                        key: "play",
                        value: function(t) {
                            for (var e = this.players.length - 1; e >= 0; e--) this.players[e].id === t && this.players[e].getPlayer().play();
                            for (var e = this.lightboxtriggers.length - 1; e >= 0; e--) this.lightboxtriggers[e].playerid === t && this.lightboxtriggers[e].trigger()
                        }
                    }, {
                        key: "getPlayer",
                        value: function(t) {
                            for (var e = this.players.length - 1; e >= 0; e--)
                                if (this.players[e].id === t) return this.players[e].getPlayer();
                            for (var e = this.lightboxtriggers.length - 1; e >= 0; e--)
                                if (this.lightboxtriggers[e].playerid === t) return this.lightboxtriggers[e].getPlayer();
                            return !1
                        }
                    }, {
                        key: "destroyPlayer",
                        value: function(t) {
                            for (var e = this.players.length - 1; e >= 0; e--)
                                if (this.players[e].id === t) return this.players[e].destroy(), this.players.splice(e, 1), !0;
                            for (var e = this.lightboxtriggers.length - 1; e >= 0; e--)
                                if (this.lightboxtriggers[e].playerid === t) return this.closeLightbox(), !0;
                            return !1
                        }
                    }, {
                        key: "closeLightbox",
                        value: function() {
                            for (var t = this.lightboxtriggers.length - 1; t >= 0; t--) this.lightboxtriggers[t].closeLightbox();
                            this.consolidatePlayers()
                        }
                    }, {
                        key: "consolidatePlayers",
                        value: function() {
                            for (var t = this.players.length - 1; t >= 0; t--) void 0 === this.players[t] || this.players[t].alive || (delete this.players[t], this.players = this.players.filter(function() {
                                return !0
                            }))
                        }
                    }, {
                        key: "configureVideoJS",
                        value: function() {
                            window.HELP_IMPROVE_VIDEOJS = !1
                        }
                    }]), t
                }();
            o["default"] = h, e.exports = o["default"]
        }, {
            "./components/Lightbox": 3,
            "./components/LightboxTrigger": 4,
            "./components/Player": 5,
            "./lib/DOMElement": 6
        }],
        2: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                s = t("../lib/Util"),
                a = n(s),
                l = function() {
                    function t(e) {
                        var o = arguments.length <= 1 || void 0 === arguments[1] ? "afterglow" : arguments[1];
                        return i(this, t), this.init(e, o)
                    }
                    return r(t, [{
                        key: "init",
                        value: function(t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? "afterglow" : arguments[1];
                            if (void 0 == t) console.error("Please provide a proper video element to afterglow");
                            else {
                                this.videoelement = t, this.options = {}, this.skin = e, this.setDefaultOptions(), this.setSkinControls();
                                var o = new a["default"];
                                o.isYoutubePlayer(this.videoelement) && this.setYoutubeOptions()
                            }
                        }
                    }, {
                        key: "setDefaultOptions",
                        value: function() {
                            this.options.controls = !0, this.options.techOrder = ["Html5"], this.options.preload = this.getPlayerAttributeFromVideoElement("preload", "auto"), this.options.autoplay = this.getPlayerAttributeFromVideoElement("autoplay"), this.options.poster = this.getPlayerAttributeFromVideoElement("poster")
                        }
                    }, {
                        key: "getPlayerAttributeFromVideoElement",
                        value: function(t) {
                            var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                            return null !== this.videoelement.getAttribute("data-" + t) ? this.videoelement.getAttribute("data-" + t) : null !== this.videoelement.getAttribute(t) ? this.videoelement.getAttribute(t) : e
                        }
                    }, {
                        key: "setSkinControls",
                        value: function() {
                            var t = {
                                children: [{
                                    name: "currentTimeDisplay"
                                }, {
                                    name: "playToggle"
                                }, {
                                    name: "durationDisplay"
                                }, {
                                    name: "progressControl"
                                }, {
                                    name: "ResolutionSwitchingButton"
                                }, {
                                    name: "volumeMenuButton",
                                    inline: !0
                                }, {
                                    name: "subtitlesButton"
                                }, {
                                    name: "captionsButton"
                                }]
                            };
                            this.options.controlBar = t
                        }
                    }, {
                        key: "setYoutubeOptions",
                        value: function() {
                            this.options.showinfo = 0, this.options.techOrder = ["youtube"], this.options.sources = [{
                                type: "video/youtube",
                                src: "https://www.youtube.com/watch?v=" + this.getPlayerAttributeFromVideoElement("youtube-id")
                            }];
                            var t = new a["default"];
                            t.ie().actualVersion >= 8 && t.ie().actualVersion <= 11 ? this.options.youtube = {
                                ytControls: 2,
                                color: "white"
                            } : this.options.youtube = {
                                iv_load_policy: 3
                            }
                        }
                    }, {
                        key: "getSkinClass",
                        value: function() {
                            var t = "vjs-afterglow-skin";
                            "afterglow" !== this.skin && (t += " afterglow-skin-" + this.skin);
                            var e = new a["default"];
                            return 9 == e.ie().actualVersion && (t += " ie9-is-bad"), t
                        }
                    }]), t
                }();
            o["default"] = l, e.exports = o["default"]
        }, {
            "../lib/Util": 7
        }],
        3: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var s = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                a = function(t, e, o) {
                    for (var n = !0; n;) {
                        var i = t,
                            r = e,
                            s = o;
                        n = !1, null === i && (i = Function.prototype);
                        var a = Object.getOwnPropertyDescriptor(i, r);
                        if (void 0 !== a) {
                            if ("value" in a) return a.value;
                            var l = a.get;
                            if (void 0 === l) return;
                            return l.call(s)
                        }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        t = u, e = r, o = s, n = !0, a = u = void 0
                    }
                },
                l = t("./Player"),
                u = n(l),
                c = t("../lib/Util"),
                p = n(c),
                f = t("../lib/DOMElement"),
                h = n(f),
                d = t("../../../../vendor/Emitter/Emitter"),
                v = n(d),
                g = function(t) {
                    function e() {
                        i(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, document.createElement("div")), this.addClass("afterglow-lightbox-wrapper"), this.build(), this.bindEmitter()
                    }
                    return r(e, t), s(e, [{
                        key: "build",
                        value: function() {
                            var t = this.buildCover(),
                                e = this.buildLightbox();
                            this.appendDomElement(t, "cover"), this.appendDomElement(e, "lightbox")
                        }
                    }, {
                        key: "buildCover",
                        value: function() {
                            var t = document.createElement("div");
                            return t = new h["default"](t), t.addClass("cover"), t
                        }
                    }, {
                        key: "buildLightbox",
                        value: function() {
                            var t = document.createElement("div");
                            return t = new h["default"](t), t.addClass("afterglow-lightbox"), t
                        }
                    }, {
                        key: "bindEmitter",
                        value: function() {
                            (0, v["default"])(this)
                        }
                    }, {
                        key: "passVideoElement",
                        value: function(t) {
                            this.playerid = t.getAttribute("id"), t = new h["default"](t), this.lightbox.appendDomElement(t, "videoelement"), this.lightbox.videoelement = t, this.lightbox.videoelement.setAttribute("autoplay", "autoplay"), this.player = new u["default"](this.lightbox.videoelement)
                        }
                    }, {
                        key: "launch",
                        value: function(t) {
                            var e = this,
                                o = new p["default"];
                            document.body.appendChild(this.node), this.player.init(function() {
                                o.isMobile() || e.player.videojs.paused() && (e.player.videojs.posterImage.show(), e.player.videojs.bigPlayButton.show()), "true" == e.lightbox.videoelement.getAttribute("data-autoclose") ? e.player.videojs.on("ended", function() {
                                    e.close()
                                }) : e.player.videojs.on("ended", function() {
                                    e.player.videojs.posterImage.show()
                                }), e.player.videojs.getChild("TopControlBar").addChild("LightboxCloseButton")
                            });
                            for (var n in window.videojs.getPlayers()) null !== window.videojs.getPlayers()[n] && window.videojs.getPlayers()[n].id_ !== this.playerid && window.videojs.getPlayers()[n].pause();
                            this.resize(), o.addEventListener(window, "resize", function() {
                                e.resize()
                            }), this.cover.bind("click", function() {
                                e.close()
                            }), o.addEventListener(window, "keyup", function(t) {
                                27 == t.keyCode && e.close()
                            }), "function" == typeof t && t(this)
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            if (void 0 !== this.lightbox.videoelement) {
                                var t = this.lightbox.videoelement.getAttribute("data-ratio");
                                if ("false" == this.lightbox.videoelement.getAttribute("data-overscale")) var e = this.calculateLightboxSizes(t, parseInt(this.lightbox.videoelement.getAttribute("data-maxwidth")));
                                else var e = this.calculateLightboxSizes(t)
                            } else if (1 == document.querySelectorAll("div.afterglow-lightbox-wrapper .vjs-youtube").length) var o = document.querySelector("div.afterglow-lightbox-wrapper .vjs-youtube"),
                                t = o.getAttribute("data-ratio"),
                                e = this.calculateLightboxSizes(t);
                            this.node.style.width = e.width, this.node.style.height = e.height, this.lightbox.node.style.height = e.playerheight + "px", this.lightbox.node.style.width = e.playerwidth + "px", this.lightbox.node.style.top = e.playeroffsettop + "px", this.lightbox.node.style.left = e.playeroffsetleft + "px"
                        }
                    }, {
                        key: "calculateLightboxSizes",
                        value: function(t, e) {
                            var o = {};
                            return o.width = window.clientWidth || document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth, o.height = window.clientHeight || document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight, o.height / o.width > t ? ("undefined" != typeof e && e < .9 * o.width ? o.playerwidth = e : o.playerwidth = .9 * o.width, o.playerheight = o.playerwidth * t) : ("undefined" != typeof e && e < .92 * o.height / t ? o.playerheight = e * t : o.playerheight = .92 * o.height, o.playerwidth = o.playerheight / t), o.playeroffsettop = (o.height - o.playerheight) / 2,
                                o.playeroffsetleft = (o.width - o.playerwidth) / 2, o
                        }
                    }, {
                        key: "close",
                        value: function() {
                            this.player.destroy(!0), this.node.parentNode.removeChild(this.node), this.emit("close")
                        }
                    }, {
                        key: "getPlayer",
                        value: function() {
                            if (void 0 !== this.player) return this.player.getPlayer()
                        }
                    }]), e
                }(h["default"]);
            o["default"] = g, e.exports = o["default"]
        }, {
            "../../../../vendor/Emitter/Emitter": 9,
            "../lib/DOMElement": 6,
            "../lib/Util": 7,
            "./Player": 5
        }],
        4: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var s = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                a = function(t, e, o) {
                    for (var n = !0; n;) {
                        var i = t,
                            r = e,
                            s = o;
                        n = !1, null === i && (i = Function.prototype);
                        var a = Object.getOwnPropertyDescriptor(i, r);
                        if (void 0 !== a) {
                            if ("value" in a) return a.value;
                            var l = a.get;
                            if (void 0 === l) return;
                            return l.call(s)
                        }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        t = u, e = r, o = s, n = !0, a = u = void 0
                    }
                },
                l = t("./Lightbox"),
                u = n(l),
                c = t("../../../../vendor/Emitter/Emitter"),
                p = n(c),
                f = t("../lib/DOMElement"),
                h = n(f),
                d = function(t) {
                    function e(t) {
                        i(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.init()
                    }
                    return r(e, t), s(e, [{
                        key: "init",
                        value: function() {
                            this.playerid = this.node.getAttribute("href").replace("#", "");
                            var t = document.querySelector("#" + this.playerid);
                            this.videoelement = new h["default"](t), this.prepare(), (0, p["default"])(this)
                        }
                    }, {
                        key: "prepare",
                        value: function() {
                            var t = this;
                            this.videoelement.addClass("afterglow-lightboxplayer"), this.videoelement.setAttribute("data-autoresize", "fit"), this.bind("click", function(e) {
                                e.preventDefault(), t.trigger()
                            })
                        }
                    }, {
                        key: "trigger",
                        value: function() {
                            var t = this;
                            this.lightbox = new u["default"];
                            var e = this.videoelement.cloneNode(!0);
                            this.lightbox.passVideoElement(e), this.emit("trigger"), this.lightbox.launch(), this.lightbox.on("close", function() {
                                t.emit("close")
                            })
                        }
                    }, {
                        key: "closeLightbox",
                        value: function() {
                            void 0 != this.lightbox && (this.lightbox.close(), this.deleteLightbox())
                        }
                    }, {
                        key: "deleteLightbox",
                        value: function() {
                            void 0 != this.lightbox && delete this.lightbox
                        }
                    }, {
                        key: "getPlayer",
                        value: function() {
                            if (void 0 !== this.lightbox) return this.lightbox.getPlayer()
                        }
                    }]), e
                }(h["default"]);
            o["default"] = d, e.exports = o["default"]
        }, {
            "../../../../vendor/Emitter/Emitter": 9,
            "../lib/DOMElement": 6,
            "./Lightbox": 3
        }],
        5: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                s = t("./Config"),
                a = n(s),
                l = t("../lib/Util"),
                u = n(l),
                c = function() {
                    function t(e) {
                        i(this, t), this.setup(e)
                    }
                    return r(t, [{
                        key: "setup",
                        value: function(t) {
                            this.videoelement = t, this.id = t.getAttribute("id"), this.config = new a["default"](t, this.getSkinName()), this.util = new u["default"], this.prepareVideoElement(), this.alive = !0
                        }
                    }, {
                        key: "prepareVideoElement",
                        value: function() {
                            this.applyDefaultClasses(), this.applyParameters(), this.util.isYoutubePlayer(this.videoelement) && this.applyYoutubeClasses()
                        }
                    }, {
                        key: "init",
                        value: function(t) {
                            var e = this.videoelement.node,
                                o = this.config.options,
                                n = window.videojs(e, o).ready(function() {
                                    var o = this;
                                    if (this.hotkeys({
                                            enableFullscreen: !1,
                                            enableNumbers: !1,
                                            enableVolumeScroll: !1
                                        }), null !== e.getAttribute("data-volume")) {
                                        var n = parseFloat(e.getAttribute("data-volume"));
                                        this.volume(n)
                                    }
                                    this.addChild("TopControlBar"), this.on("play", function() {
                                        for (var t in window.videojs.getPlayers()) null !== window.videojs.getPlayers()[t] && window.videojs.getPlayers()[t].id_ !== o.id_ && window.videojs.getPlayers()[t].pause()
                                    }), "function" == typeof t && t(this)
                                });
                            this.videojs = n
                        }
                    }, {
                        key: "applyDefaultClasses",
                        value: function() {
                            var t = this;
                            this.videoelement.addClass("video-js"), this.videoelement.addClass("afterglow");
                            var e = this.config.getSkinClass().split(" ");
                            e.forEach(function(e) {
                                t.videoelement.addClass(e)
                            }), this.videoelement.removeClass("sublime");
                            var o = this.util.ie().actualVersion;
                            o >= 8 && o <= 11 && this.videoelement.addClass("vjs-IE")
                        }
                    }, {
                        key: "applyParameters",
                        value: function() {
                            if ("false" == this.videoelement.getAttribute("data-overscale") && this.videoelement.setAttribute("data-maxwidth", this.videoelement.getAttribute("width")), "fit" === this.videoelement.getAttribute("data-autoresize") || this.videoelement.hasClass("responsive")) {
                                this.videoelement.addClass("vjs-responsive");
                                var t = this.calculateRatio();
                                this.videoelement.node.style.paddingTop = 100 * t + "%", this.videoelement.removeAttribute("height"), this.videoelement.removeAttribute("width"), this.videoelement.setAttribute("data-ratio", t)
                            }
                        }
                    }, {
                        key: "applyYoutubeClasses",
                        value: function() {
                            this.videoelement.addClass("vjs-youtube"), document.querySelector("video").controls && this.videoelement.addClass("vjs-using-native-controls"), /iPad|iPhone|iPod|iOS/.test(navigator.platform) && this.videoelement.addClass("vjs-iOS");
                            var t = this.util.ie().actualVersion;
                            t >= 8 && t <= 11 && this.videoelement.addClass("vjs-using-native-controls")
                        }
                    }, {
                        key: "calculateRatio",
                        value: function() {
                            if (this.videoelement.getAttribute("data-ratio")) var t = this.videoelement.getAttribute("data-ratio");
                            else {
                                if (!this.videoelement.getAttribute("height") || !this.videoelement.getAttribute("width")) return console.error("Please provide witdh and height for your video element."), 0;
                                var t = this.videoelement.getAttribute("height") / this.videoelement.getAttribute("width")
                            }
                            return parseFloat(t)
                        }
                    }, {
                        key: "getSkinName",
                        value: function() {
                            return this.videoelement.getAttribute("data-skin") ? this.videoelement.getAttribute("data-skin") : "afterglow"
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.videojs.paused() || this.videojs.pause(), this.videojs.isFullscreen() && this.videojs.exitFullscreen(), this.videojs.dispose(), this.alive = !1
                        }
                    }, {
                        key: "getPlayer",
                        value: function() {
                            return this.videojs
                        }
                    }]), t
                }();
            o["default"] = c, e.exports = o["default"]
        }, {
            "../lib/Util": 7,
            "./Config": 2
        }],
        6: [function(t, e, o) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var i = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                r = function() {
                    function t(e) {
                        n(this, t), this.node = e
                    }
                    return i(t, [{
                        key: "addClass",
                        value: function(t) {
                            return this.node.classList ? this.node.classList.add(t) : this.hasClass(t) || (this.node.className += " " + t), this
                        }
                    }, {
                        key: "removeClass",
                        value: function(t) {
                            if (this.node.classList) this.node.classList.remove(t);
                            else {
                                var e = this.node.className.split(" ");
                                e.splice(e.indexOf(t), 1), this.node.className = e.join(" ")
                            }
                            return this
                        }
                    }, {
                        key: "hasClass",
                        value: function(t) {
                            return this.node.classList ? this.node.classList.contains(t) : -1 < this.node.className.indexOf(t)
                        }
                    }, {
                        key: "bind",
                        value: function(t, e) {
                            for (var o = t.split(" "), n = 0, i = o.length; n < i; n++) this.node.addEventListener ? this.node.addEventListener(o[n], e, !1) : this.node.attachEvent && this.node.attachEvent("on" + o[n], e);
                            return this
                        }
                    }, {
                        key: "unbind",
                        value: function(t, e) {
                            for (var o = t.split(" "), n = 0, i = o.length; n < i; n++) this.node.removeEventListener && this.node.removeEventListener(o[n], e, !1), this.node.detachEvent && this.node.detachEvent("on" + o[n], e);
                            return this
                        }
                    }, {
                        key: "appendDomElement",
                        value: function(t, e) {
                            this[e] = t, this.appendChild(t.node)
                        }
                    }, {
                        key: "getAttribute",
                        value: function(t) {
                            return this.node.getAttribute(t)
                        }
                    }, {
                        key: "setAttribute",
                        value: function(t, e) {
                            return this.node.setAttribute(t, e)
                        }
                    }, {
                        key: "hasAttribute",
                        value: function(t) {
                            return this.node.hasAttribute(t)
                        }
                    }, {
                        key: "removeAttribute",
                        value: function(t) {
                            return this.node.removeAttribute(t)
                        }
                    }, {
                        key: "cloneNode",
                        value: function() {
                            var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
                            return this.node.cloneNode(t)
                        }
                    }, {
                        key: "appendChild",
                        value: function(t) {
                            this.node.appendChild(t)
                        }
                    }]), t
                }();
            o["default"] = r, e.exports = o["default"]
        }, {}],
        7: [function(t, e, o) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var i = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                r = function() {
                    function t() {
                        n(this, t)
                    }
                    return i(t, [{
                        key: "isYoutubePlayer",
                        value: function(t) {
                            return t.hasAttribute("data-youtube-id")
                        }
                    }, {
                        key: "loadYoutubeThumbnailUrl",
                        value: function(t) {
                            var e = "https://img.youtube.com/vi/" + t + "/maxresdefault.jpg";
                            return e
                        }
                    }, {
                        key: "isDailymotionPlayer",
                        value: function(t) {
                            return t.hasAttribute("data-dailymotion-id")
                        }
                    }, {
                        key: "ie",
                        value: function() {
                            var t, e, o, n, i;
                            return e = !1, n = {
                                5.5: "5.5",
                                5.6: "6",
                                5.7: "7",
                                5.8: "8",
                                9: "9",
                                10: "10"
                            }, i = new Function("/*@cc_on return @_jscript_version; @*/")(), void 0 !== i && (e = !0, o = n[i]), t = {
                                isTheBrowser: e,
                                actualVersion: o
                            }, e || window.navigator.userAgent.indexOf("Trident/7.0") > 0 && !/x64|x32/gi.test(window.navigator.userAgent) && (t = {
                                isTheBrowser: !0,
                                actualVersion: "11"
                            }), t
                        }
                    }, {
                        key: "isMobile",
                        value: function() {
                            var t = function() {
                                    return navigator.userAgent.match(/Android/i)
                                },
                                e = function() {
                                    return navigator.userAgent.match(/BlackBerry/i)
                                },
                                o = function() {
                                    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
                                },
                                n = function() {
                                    return navigator.userAgent.match(/Opera Mini/i)
                                },
                                i = function() {
                                    return navigator.userAgent.match(/IEMobile/i)
                                };
                            return !!(t() || e() || o() || n() || i())
                        }
                    }, {
                        key: "merge_objects",
                        value: function(t, e) {
                            var o = {};
                            for (var n in t) o[n] = t[n];
                            for (var n in e) o[n] = e[n];
                            return o
                        }
                    }, {
                        key: "addEventListener",
                        value: function(t, e, o) {
                            null != t && "undefined" != typeof t && (t.addEventListener ? t.addEventListener(e, o, !1) : t.attachEvent ? t.attachEvent("on" + e, o) : t["on" + e] = o)
                        }
                    }]), t
                }();
            o["default"] = r, e.exports = o["default"]
        }, {}],
        8: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            var i = t("./afterglow/Afterglow"),
                r = n(i);
            document.addEventListener("DOMContentLoaded", function() {
                window.afterglow = new r["default"], window.afterglow.init()
            })
        }, {
            "./afterglow/Afterglow": 1
        }],
        9: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t) return i(t)
            }

            function i(t) {
                for (var e in n.prototype) t[e] = n.prototype[e];
                return t
            }
            e.exports = n, n.prototype.on = n.prototype.addEventListener = function(t, e) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
            }, n.prototype.once = function(t, e) {
                function o() {
                    this.off(t, o), e.apply(this, arguments)
                }
                return o.fn = e, this.on(t, o), this
            }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var o = this._callbacks["$" + t];
                if (!o) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                for (var n, i = 0; i < o.length; i++)
                    if (n = o[i], n === e || n.fn === e) {
                        o.splice(i, 1);
                        break
                    }
                return this
            }, n.prototype.emit = function(t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    o = this._callbacks["$" + t];
                if (o) {
                    o = o.slice(0);
                    for (var n = 0, i = o.length; n < i; ++n) o[n].apply(this, e)
                }
                return this
            }, n.prototype.listeners = function(t) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
            }, n.prototype.hasListeners = function(t) {
                return !!this.listeners(t).length
            }
        }, {}]
    }, {}, [8]);
	