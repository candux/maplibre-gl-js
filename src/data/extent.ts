/**
 * The maximum value of a coordinate in the internal tile coordinate system. Coordinates of
 * all source features normalized to this extent upon load.
 *
 * The value is a consequence of the following:
 *
 * * Vertex buffer store positions as signed 16 bit integers.
 * * One bit is lost for signedness to support tile buffers.
 * * One bit is lost to support features extending past the extent on the right edge of the tile.
 * * This leaves us with 2^14 = 16384
 */
export const EXTENT = 16384;
