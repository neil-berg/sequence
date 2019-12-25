exports.seed = knex => {
    // Deletes ALL existing entries
    return knex("user")
        .del()
        .then(() => {
            // Inserts seed entries
            return knex("user").insert([
                {
                    name: "User 1",
                    username: "username1",
                    email: "name1@example.com",
                    password:
                        "aK4cSdnwnCizD8fblhKCS18jHM36vicQeLYx0LWrF1bRzd11dH6Mhv/NiZ5B1x6lWRJtH/pJvS2xy7kCa08M8qmdZb27iAI1oi4xFaOJTWHdvEsCX44Xrqe8pmqOQz6xMWxVaHikRQcJy4C40qoyt1FXtk99tLigX6kJQBVMSNsvYIwvVm7hwHk9HpZkPGUuCoMP2psye33QsHkT9Rg2dzqTV+/NvIsEs0uygPAE2wEi74vwvqrOrhkEL1okxXF3KrnymYJQmNaU+DtXPxkJtiFkZKGk5ZQCf/U43RscEXQI+D1ZDvMITdTH/xDZnP4ZOKx+6qfm4szIjPwVFAN+Zc0CpYBrJ5bkLPCuV//O1QGdV33n+jNOClZ3oH6GrezmLoAyDutdyIP4obO/TdqCu72CkactgDbTJxdkgsnt5od9r0r7HA878yOu6JUoC2EveHWpnk24XKjn1Y/1mHAML8Jlnv3FjTLRWt2K0Qb8YW9ko7D+hWtKMsl2pCB2Euo1v+QlCuR9FD2L4mtPXqchQhzzwZnPLUBLD1rnXWHdUAnBG3gKVuvin7si/q1zxjKZMIZw978lp5q8YZcBwzK4OnJOL0ysKFpoN1WDhD0jpoYgxXf+QHSkT2nhlfb7hE85ulggbDbVgmU05lDVsoCJ7WimO18/7yju0449AZZXe7s=",
                    salt:
                        "NRYPJi8133+lbkdRYJbP3lIq+WJRF6NWFFccp6m07wWXGyMvD6IT6fov0NYquTlkoT36Y3NH95VEQxmm1SVbqLAoAop/AAOc9KQkr1NTlbBA3yMG01hGl6pASWWgcr12RJcl/1rKPyDvkzicL+FqhSY0uwRcnUoIhn2FxZp1M5o="
                }
            ]);
        });
};
