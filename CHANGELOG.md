# Changelog
## v7.0.16
- Split schema definitions to separate Schema suffix to resolve vsCode and tooling confusion.

## v6.0.15
- Rename exports `CanvasDaemon` to `CanvasDb`.
- Update import to `@dsbunny/capdb-schema`.
- Drop `@dsbunny/sequential-task`, internal schema moved to internal package.
- Bump to `zod@4.3.6`.

## v5.1.14
- Add new schema for task inspection.
- Add dependency on `@dsbunny/sequential-task`.

## v5.0.13
- Add new composite `CanvasDaemonRequest` and `CanvasDaemonResponse` for public API.
- Migrate to `@dsbunny/error-schema` and `@dsbunny/webhook-schema`.
- New internal schema for WebHook tasks.

## v4.0.12
- Extend _suggestions_ with canvas ID in responses.

## v3.0.11
- Rename `UpdateCanvasRequest` to `PatchCanvasRequest` and set a limit of 50 operations.

## v2.3.10
- Add API for name availability.

## v2.2.9
- Bump to `zod@4.1.11`.
- Move Zod to `peerDependencies` so users can bring their own Zod.

## v2.1.8
- Add API endpoint schemas.

## v2.0.7
- Add limits to array sizes, minimum 1 tag and viewport.

## v2.0.6
- Bump to `zod@next` with `zod/v4` imports.

## v2.0.5
- Bump to `zod@4.0.0-beta`.

## v2.0.4
- Rename `fps` to `frame_rate` for consistency.

## v1.0.3
- Add `name` and `tags` to the `Canvas`, enabling search and filter.

## v1.0.2
- Remove `viewport_id` as a schema simplification.
- Replace `CanvasCapability` with upstream `CapabilityBase`.

## v1.0.1
- Add `CanvasRegistration` as response to registering a _canvas_ definition.

## v1.0.0
- Initial release.
