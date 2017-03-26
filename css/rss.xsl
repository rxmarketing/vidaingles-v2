<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:dc="http://purl.org/dc/elements/1.1/">

  <xsl:output method="html" />

  <xsl:template name="removeHtmlTags">
    <xsl:param name="html"/>
    <xsl:choose>
      <xsl:when test="contains($html, '&lt;')">
        <xsl:value-of select="substring-before($html, '&lt;')"/>
        <!-- Recurse through HTML -->
        <xsl:call-template name="removeHtmlTags">
          <xsl:with-param name="html" select="substring-after($html, '&gt;')"/>
        </xsl:call-template>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$html"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

	 <xsl:variable name="title" select="Vida"/>

	<xsl:template match="/">

		<html>
			<head>
				<title>
					<xsl:value-of select="$title"/> XML Feed</title>
			<link rel="stylesheet" href="../vi_core.css" type="text/css"/>

			</head>
		<xsl:apply-templates select="rss/channel"/>
		</html>
	</xsl:template>

		<xsl:template match="channel">
		<body>



			<div class="banbox">
			<div class="padbanbox">
			<div class="mvb">
			<a href="http://vidaingles.com" class="item"><img  alt="RSS News feeds" src="/feedIcon.png" title="RSS News feeds" align="left" />RSS Feed for <xsl:value-of select=" $title"/></a>

			<br clear="all" />
			 </div>

			<div class="fltclear">Preparate para tus examenes de ingles.

			</div>


			</div>
			</div>

			<div class="mainbox">
				<div class="itembox">
					<div class="paditembox">
					<xsl:apply-templates select="item"/>
					</div>
				</div>





			</div>


		</body>
	</xsl:template>

	<xsl:template match="item">
	<div id="item">
		<ul>
			<li>
				<a href="{link}" class="item">
					<xsl:value-of disable-output-escaping="yes" select="title"/>
				</a>
				<br/>
				<div>
					<strong><xsl:value-of disable-output-escaping="yes" select="dc:creator"/></strong> |
					<xsl:value-of disable-output-escaping="yes" select="pubDate"/>
				</div>
				<div>
					<xsl:value-of disable-output-escaping="yes" select="description" />
				</div>
			</li>
		</ul>
	</div>
	</xsl:template>

</xsl:stylesheet>