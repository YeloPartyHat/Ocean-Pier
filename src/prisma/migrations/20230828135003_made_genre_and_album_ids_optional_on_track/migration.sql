-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Track" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "genreId" INTEGER,
    "bitrate" INTEGER NOT NULL,
    "sourceId" TEXT NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "fileId" INTEGER NOT NULL,
    "contributingArtistsJson" TEXT NOT NULL,
    "albumId" INTEGER,
    "duration" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "thumbnailId" INTEGER NOT NULL,
    CONSTRAINT "Track_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Track_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Track_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Track_thumbnailId_fkey" FOREIGN KEY ("thumbnailId") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Track" ("albumId", "authorId", "bitrate", "contributingArtistsJson", "createdAt", "description", "duration", "fileId", "genreId", "id", "originalUrl", "sourceId", "thumbnailId", "title", "updatedAt") SELECT "albumId", "authorId", "bitrate", "contributingArtistsJson", "createdAt", "description", "duration", "fileId", "genreId", "id", "originalUrl", "sourceId", "thumbnailId", "title", "updatedAt" FROM "Track";
DROP TABLE "Track";
ALTER TABLE "new_Track" RENAME TO "Track";
CREATE UNIQUE INDEX "Track_sourceId_key" ON "Track"("sourceId");
CREATE UNIQUE INDEX "Track_fileId_key" ON "Track"("fileId");
CREATE UNIQUE INDEX "Track_thumbnailId_key" ON "Track"("thumbnailId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;