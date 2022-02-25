FROM node:16.11-alpine3.14 AS build

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1

COPY \
	.env \
	next-env.d.ts \
	tsconfig.json \
	postcss.config.js \
	tailwind.config.js \
	next.config.mjs \
	package.json \
	yarn.lock \
	/build/

RUN \
    yarn install --frozen-lockfile && \
    npx browserslist@latest --update-db && \
    yarn build


FROM node:16.11-alpine3.14

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV PORT 3000

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app
USER nextjs

COPY package.json yarn.lock /app
COPY --from=build /app/.next /app/.next

RUN yarn install --prod --frozen-lockfile

RUN \
    yarn install --frozen-lockfile && \
    yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
