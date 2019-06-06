FROM microsoft/dotnet:sdk AS build-env
RUN ls; echo "RUNNING INITIAL LS"
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/out .
# CMD dotnet InstagramAPIClone.dll
CMD ASPNETCORE_URLS=http://*:$PORT dotnet InstagramAPIClone.dll
