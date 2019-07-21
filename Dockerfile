# Build Stage
FROM node:10.15.3 As builder
WORKDIR /tmp/build
COPY *.json ./
# Install dependencies
RUN npm install
COPY src src
COPY public public
# Definition is invalid
RUN npm run build

# Run Stage
FROM node:10.15.3 As runner
RUN npm install -g serve
WORKDIR /root
COPY package.json package-lock.json ./
RUN npm install --only=prod
COPY --from=builder /tmp/build/build build
CMD ["serve", "-s", "build"]  