---
title: "Open source Hustle"
publishedAt: 2024-12-24
description: ""
slug: "Open source Hustle"
isPublish: true
---
# My Experience Using JSR and MinIO.js with Supabase S3: From Roadblocks to Victory

Working on a project that uses Supabase as my S3 provider has been a fascinating journey. While Supabase is a fantastic ecosystem, I wanted to keep my architecture flexible and not overly dependent on their tooling. That’s where the challenge began: finding a standalone S3 client that would seamlessly integrate with my setup.

After some research, I landed on MinIO.js, the next best thing to the AWS client, which unfortunately doesn’t fully support Deno. MinIO.js seemed like the perfect fit—until I hit a roadblock that led me down a path of problem-solving, open-source contributions, and an eventual triumphant resolution with JSR. Let me tell you all about it!

## The Problem: MinIO.js Doesn’t Play Nice with Supabase’s Endpoint

Supabase’s S3 API has a slightly unconventional endpoint. Instead of the standard S3 path, it includes a suffix: `/storage/v1/s3`. While that’s perfectly fine for Supabase’s internal tooling, it turned out to be a bit of a curveball for MinIO.js.

MinIO.js, as great as it is, doesn’t natively support such endpoint customizations. I discovered this after spending some time setting it up and realizing that requests weren’t hitting Supabase’s S3 correctly. Frustration kicked in, but I wasn’t ready to give up.

My first instinct? Open an issue on MinIO’s GitHub repository. After all, it’s an open-source library, and this seemed like a valid feature request. Unfortunately, my request didn’t gain much traction. That’s when I decided to take matters into my own hands.

[You can see the issue here on GitHub](https://github.com/minio/minio-js/issues/1370).

## Enter JSR: A Breeze of a Solution

I wasn’t ready to abandon MinIO.js. It’s a solid library, and I knew I could tweak it to work with Supabase’s endpoint. So, I forked the repository and made the necessary changes. Along the way, I also polished up some TypeScript declarations to make the experience smoother.

Now came the fun part: sharing my modified version with the world. That’s when I turned to JSR (JavaScript Registry). Let me tell you—it was a breeze!

With just a few simple steps, I uploaded my updated version of MinIO.js to JSR:

1. Forked the MinIO.js repository and implemented my changes.
2. Verified everything worked as expected.
3. Ran the magic command: `npx jsr upload`.
4. And boom—just like that, my version of MinIO.js was live and ready for anyone facing the same challenge!

You can check out my forked version [here on JSR](https://jsr.io/@sugar/minio-js-with-startpath).

## Reflecting on the Journey

This experience was a fantastic reminder of the power of open source. Instead of hitting a dead end or resorting to workarounds, I was able to take control, solve the problem, and contribute something useful back to the community.

It also taught me the importance of keeping my architecture flexible. By not leaning too heavily into Supabase’s ecosystem, I was able to explore and integrate alternative solutions that fit my needs.

For anyone out there navigating similar challenges, my advice is simple: Don’t shy away from open-source contributions. It might feel daunting at first, but it’s incredibly rewarding—not to mention a great way to leave your mark.

## Conclusion

From roadblocks with MinIO.js to an effortless deployment with JSR, this journey has been nothing short of exhilarating. I started out with a simple goal: use Supabase’s S3 without being locked into its ecosystem. What I got instead was a lesson in perseverance, problem-solving, and the sheer joy of seeing your contributions in action.

If you’re facing similar hurdles or just curious about tweaking libraries to suit your needs, I encourage you to dive in. The open-source world is full of possibilities—sometimes, all it takes is a small nudge (and an `npx jsr upload`) to turn frustration into triumph.

So, here’s to many more contributions, countless problem-solving adventures, and the amazing power of open source!
